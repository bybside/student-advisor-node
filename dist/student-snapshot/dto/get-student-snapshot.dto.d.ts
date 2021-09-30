import { StudentSnapshot } from "@prisma/client";
export declare class GetStudentSnapshotDto {
    id: number;
    cumulativeGpa: number;
    classRank: number;
    historicalRank: number;
    studentId: number;
    constructor(snapshot: StudentSnapshot);
}
