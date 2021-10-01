import { SubjectPerformance } from "@prisma/client";
export declare class GetSubjectPerformanceDto {
    average: number | null;
    subjectId: number;
    constructor(performance: SubjectPerformance);
}
