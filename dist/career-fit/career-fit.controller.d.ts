import { CareerFitRepository } from "./career-fit.repository";
import { GetCareerFitByOccupationDto } from "./dto/get-career-fit-by-occupation.dto";
import { GetCareerFitByStudentDto } from "./dto/get-career-fit-by-student.dto";
export declare class CareerFitController {
    private readonly _repo;
    constructor(_repo: CareerFitRepository);
    getCareerFitByStudent(snapshotId: number): Promise<GetCareerFitByStudentDto[]>;
    getCareerFitByOccupation(snapshotId: number): Promise<GetCareerFitByOccupationDto[]>;
}
