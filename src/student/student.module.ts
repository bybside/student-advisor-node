import { Module } from "@nestjs/common"
import { DbService } from "src/data/db.service";
import { StudentController } from "./student.controller";
import { StudentRepository } from "./student.repository";

/**
 * following the feature module pattern outlined
 * in the Nest JS documentation {@link https://docs.nestjs.com/modules here}
 */

@Module({
    controllers: [StudentController],
    providers: [StudentRepository, DbService]
})
export class StudentModule { }