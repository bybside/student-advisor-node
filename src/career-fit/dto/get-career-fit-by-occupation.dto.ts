import { CareerFitByOccupation } from "@prisma/client"

export class GetCareerFitByOccupationDto {
    scoreRank: number
    occupationId: number

    public constructor(careerFit: CareerFitByOccupation) {
        // JSON.stringify(): can't parse bigint
        this.scoreRank = Number(careerFit.scoreRank)
        this.occupationId = careerFit.occupationId
    }
}