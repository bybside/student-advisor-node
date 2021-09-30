import { StudentSnapshot } from "@prisma/client";

export class GetStudentSnapshotDto {
    id: number
    cumulativeGpa: number
    classRank: number
    historicalRank: number
    studentId: number

    public constructor(snapshot: StudentSnapshot) {
        this.id = snapshot.id
        this.cumulativeGpa = snapshot.cumulativeGpa
        this.classRank = snapshot.classRank
        this.historicalRank = snapshot.historicalRank
        this.studentId = snapshot.studentId
    }
}