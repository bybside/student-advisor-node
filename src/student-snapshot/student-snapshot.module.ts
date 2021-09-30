import { Module } from "@nestjs/common";
import { DbService } from "src/data/db.service";
import { StudentSnapshotController } from "./student-snapshot.controller";
import { StudentSnapshotRepository } from "./student-snapshot.repository";

/**
 * following the feature module pattern outlined
 * in the Nest JS documentation {@link https://docs.nestjs.com/modules here}
 */

@Module({
    controllers: [StudentSnapshotController],
    providers: [StudentSnapshotRepository, DbService]
})
export class StudentSnapshotModule { }