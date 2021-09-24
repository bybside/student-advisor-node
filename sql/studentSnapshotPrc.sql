-- snapshot generation logic (inserts for StudentSnapshot & SubjectPerformance table)
create or replace procedure "GenerateStudentSnapshotsPrc"()
language plpgsql
as $$
begin
	-- steps 1, 2, & 3: refresh cumulative GPAs, class & historical ranks
	with
		-- step 1: calculate student cumulative GPAs
		"CumulativeGpaByStudent" as (
			select "studentId",
				   avg("courseGpa") as "cumulativeGpa"
			from (
				select "studentId",
					   "courseId",
					   case when avg(grade) >= 90 then 4.0
							when avg(grade) >= 80 then 3.0
							when avg(grade) >= 70 then 2.0
							when avg(grade) >= 60 then 1.0
							else 0.0
					   end as "courseGpa"
				from "Grade" gr, "Course" co
				where co.id = gr."courseId"
				group by "studentId", "courseId"
			) "gpaByCourse"
			group by "studentId"
		),
		-- steps 2 & 3: class & historical ranks (by cumulative GPA)
		"GpaRanks" as (
			select id as "studentId",
				   "cumulativeGpa",
				   rank() over(
					   partition by "gradYear"
					   order by "cumulativeGpa" desc
				   ) "classRank",
				   rank() over(
					   order by "cumulativeGpa" desc
				   ) "historicalRank"
			from "Student" st, "CumulativeGpaByStudent" cgbs
			where st.id = cgbs."studentId"
		)
	insert into "StudentSnapshot" ("studentId", "cumulativeGpa", "classRank", "historicalRank")
	select id as "studentId",
		   "cumulativeGpa",
		   "classRank",
		   "historicalRank"
	from "Student" st, "GpaRanks" gr
	where id = gr."studentId"
	order by "historicalRank";

	-- step 4: cumulative average by subject (inserts for SubjectPerformance table)
	with
		"CumulativeAvgBySubject" as (
			select "studentId",
				   "subjectId",
				   avg(grade) as "average"
			from "Grade" gr, "Course" co, "Subject" sub 
			where co.id = gr."courseId"
			and sub.id = co."subjectId"
			group by "studentId", "subjectId"
		)
	insert into "SubjectPerformance" ("snapshotId", "subjectId", "average")
	select ss.id as "snapshotId",
		   "subjectId",
		   "average"
	from "CumulativeAvgBySubject" cabs, "StudentSnapshot" ss
	where cabs."studentId" = ss."studentId"
	and ss."createdAt"::date = current_date;
end;
$$;