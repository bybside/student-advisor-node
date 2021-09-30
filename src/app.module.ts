import { Module } from "@nestjs/common"
import { StudentSnapshotModule } from "./student-snapshot/student-snapshot.module"
import { StudentModule } from "./student/student.module"

@Module({
    imports: [StudentModule, StudentSnapshotModule]
})
export class AppModule { }