import { CareerFitByStudent } from "@prisma/client";
export declare class GetCareerFitByStudentDto {
    scoreRank: number;
    studentId: number;
    constructor(careerFit: CareerFitByStudent);
}
