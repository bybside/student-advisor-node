import { SubjectPerformance } from "@prisma/client";

export class GetSubjectPerformanceDto {
    average: number | null
    subjectId: number

    public constructor(performance: SubjectPerformance) {
        this.average = performance.average
        this.subjectId = performance.subjectId
    }
}