import { Module } from "@nestjs/common"
import { CareerFitModule } from "./career-fit/career-fit.module"
import { StudentSnapshotModule } from "./student-snapshot/student-snapshot.module"
import { StudentModule } from "./student/student.module"

@Module({
    imports: [StudentModule, StudentSnapshotModule, CareerFitModule]
})
export class AppModule { }