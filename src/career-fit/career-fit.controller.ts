import { CareerFitByOccupation, CareerFitByStudent } from ".prisma/client";
import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { CareerFitRepository } from "./career-fit.repository";
import { GetCareerFitByOccupationDto } from "./dto/get-career-fit-by-occupation.dto";
import { GetCareerFitByStudentDto } from "./dto/get-career-fit-by-student.dto";

@Controller("career-fit")
export class CareerFitController {
    public constructor(private readonly _repo: CareerFitRepository) { }

    @Get("student/:snapshotId")
    public async getCareerFitByStudent(
        @Param("snapshotId", ParseIntPipe) snapshotId: number
    ): Promise<GetCareerFitByStudentDto[]> {
        const careerFitByStudent: CareerFitByStudent[] = await this._repo.getCareerFitByStudent(snapshotId)
        return careerFitByStudent.map((cf) => new GetCareerFitByStudentDto(cf))
    }

    @Get("occupation/:snapshotId")
    public async getCareerFitByOccupation(
        @Param("snapshotId", ParseIntPipe) snapshotId: number
    ): Promise<GetCareerFitByOccupationDto[]> {
        const careerFitByOccupation: CareerFitByOccupation[] = await this._repo.getCareerFitByOccupation(snapshotId)
        return careerFitByOccupation.map((cf) => new GetCareerFitByOccupationDto(cf))
    }
}