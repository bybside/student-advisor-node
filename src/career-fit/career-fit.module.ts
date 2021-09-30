import { Module } from "@nestjs/common";
import { DbService } from "src/data/db.service";
import { CareerFitController } from "./career-fit.controller";
import { CareerFitRepository } from "./career-fit.repository";

/**
 * following the feature module pattern outlined
 * in the Nest JS documentation {@link https://docs.nestjs.com/modules here}
 */

@Module({
    controllers: [CareerFitController],
    providers: [CareerFitRepository, DbService]
})
export class CareerFitModule { }