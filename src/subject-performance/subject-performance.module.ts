import { Module } from "@nestjs/common";
import { DbService } from "src/data/db.service";
import { SubjectPerformanceController } from "./subject-performance.controller";
import { SubjectPerformanceRepository } from "./subject-performance.repository";

/**
 * following the feature module pattern outlined
 * in the Nest JS documentation {@link https://docs.nestjs.com/modules here}
 */

@Module({
    controllers: [SubjectPerformanceController],
    providers: [SubjectPerformanceRepository, DbService]
})
export class SubjectPerformanceModule { }