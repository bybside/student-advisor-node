-- ranks student similarity given pre-defined, weighted metrics to suggest potential career paths
create or replace procedure "GenerateCareerFitDataPrc"()
language plpgsql
as $$
declare
	sid int;
begin
	for sid in (select id
				from "Student"
				where active = TRUE) loop
		with	
			-- get the latest snapshot for student x
			"LatestStudentXSnapshot" as (
				select stud.id as "studentId",
					   "firstName",
					   "lastName",
					   "gradYear",
					   "occupationId",
					   snap.id as "snapshotId",
					   "createdAt",
					   "cumulativeGpa"
				from "Student" stud, "StudentSnapshot" snap
				where stud.id = snap."studentId"
				and stud.id = sid
				order by snap."createdAt" desc
				limit 1
			),
			-- get most recent snapshots for all students from graduation years prior to student x
			"PredecessorSnapshots" as (
				select "studentId",
					   "occupationId",
					   "snapshotId",
					   "cumulativeGpa"
				from (
					select stud.id as "studentId",
						   stud."occupationId",
						   snap.id as "snapshotId",
						   snap."cumulativeGpa" as "cumulativeGpa",
						   rank() over(order by snap."createdAt" desc) as "snapRank" 
					from "Student" stud, "StudentSnapshot" snap, "LatestStudentXSnapshot" lsxs
					where stud.id = snap."studentId"
					and stud."gradYear" < lsxs."gradYear"
				) "snapRanks"
				where "snapRank" = 1
			),
			"LatestStudentXSubjectRanks" as (
				select "subjectId",
					   rank() over(partition by "studentId"
								   order by average desc) as "strengthRank",
					   rank() over(partition by "studentId"
								   order by average) as "weaknessRank"
				from "LatestStudentXSnapshot" lsxs, "SubjectPerformance" sp
				where lsxs."snapshotId" = sp."snapshotId"
			),
			"PredecessorSubjectRanks" as (
				select "studentId",
					   "occupationId",
					   "subjectId",
					   average,
					   rank() over(partition by "studentId"
								   order by average desc) as "strengthRank",
					   rank() over(partition by "studentId"
								   order by average) as "weaknessRank"
				from "PredecessorSnapshots" ps, "SubjectPerformance" sp
				where ps."snapshotId" = sp."snapshotId"
			),
			-- get all students with a cumulative gpa within 0.05(+-) of student x
			"SimilarCumulativeGpa" as (
				select ps."studentId",
					   ps."occupationId",
					   3 as "simScore"
				from "PredecessorSnapshots" ps, "LatestStudentXSnapshot" lsxs
				where ps."cumulativeGpa" between lsxs."cumulativeGpa" - .05 and lsxs."cumulativeGpa" + .05
			),
			-- get all students with the same strongest subject as student x
			"SameStrongestSubject" as (
				select "studentId",
					   "occupationId",
					   2 as "simScore"
				from "PredecessorSubjectRanks" psr, "LatestStudentXSubjectRanks" lsxsr
				where psr."subjectId" = lsxsr."subjectId"
				and psr."strengthRank" = 1
				and lsxsr."strengthRank" = 1
			),
			-- get all students with the same weakest subject as student x
			"SameWeakestSubject" as (
				select "studentId",
					   "occupationId",
					   1 as "simScore"
				from "PredecessorSubjectRanks" psr, "LatestStudentXSubjectRanks" lsxsr
				where psr."subjectId" = lsxsr."subjectId"
				and psr."weaknessRank" = 1
				and lsxsr."weaknessRank" = 1
			),
			-- combine above analyses and accumulate a total similarity score
			"SimilarityScoreTotals" as (
				select * from "SimilarCumulativeGpa"
				union 
				select * from "SameStrongestSubject"
				union 
				select * from "SameWeakestSubject"
			),
			-- rank and insert similarity scores for student x by predecessor
			"InsertCareerFitByStudentData" as (
				insert into "CareerFitByStudent" ("snapshotId", "studentId", "totalScore", "scoreRank")
				select "snapshotId",
					   sst."studentId",
					   sum("simScore") as "totalScore",
					   rank() over(order by sum("simScore") desc) as "scoreRank"
				from "SimilarityScoreTotals" sst, "LatestStudentXSnapshot" lsxs
				group by "snapshotId", sst."studentId"
			)
			-- rank and insert similarity scores for student x by occupation
			insert into "CareerFitByOccupation" ("snapshotId", "occupationId", "totalScore", "scoreRank")
			select "snapshotId",
				   sst."occupationId",
				   sum("simScore") as "totalScore",
				   rank() over(order by sum("simScore") desc) as "scoreRank"
			from "SimilarityScoreTotals" sst, "LatestStudentXSnapshot" lsxs
			group by "snapshotId", sst."occupationId";
			-- snapshot generation time is logged in StudentSnapshot table;
			-- should we also log the time career fit ranks are generated here?
	end loop;
end;
$$;
