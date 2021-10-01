import { Module } from "@nestjs/common"
import { CareerFitModule } from "./career-fit/career-fit.module"
import { StudentSnapshotModule } from "./student-snapshot/student-snapshot.module"
import { StudentModule } from "./student/student.module"
import { SubjectPerformanceModule } from "./subject-performance/subject-performance.module"

@Module({
    imports: [StudentModule, StudentSnapshotModule, CareerFitModule, SubjectPerformanceModule]
})
export class AppModule { }