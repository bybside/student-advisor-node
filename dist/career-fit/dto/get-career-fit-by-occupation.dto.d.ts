import { CareerFitByOccupation } from "@prisma/client";
export declare class GetCareerFitByOccupationDto {
    scoreRank: number;
    occupationId: number;
    constructor(careerFit: CareerFitByOccupation);
}
