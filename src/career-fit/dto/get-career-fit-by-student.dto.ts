import { CareerFitByStudent } from "@prisma/client"

export class GetCareerFitByStudentDto {
    scoreRank: number
    studentId: number

    public constructor(careerFit: CareerFitByStudent) {
        // JSON.stringify(): can't parse bigint
        this.scoreRank = Number(careerFit.scoreRank)
        this.studentId = careerFit.studentId
    }
}