"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStudentSnapshotDto = void 0;
class GetStudentSnapshotDto {
    constructor(snapshot) {
        this.id = snapshot.id;
        this.cumulativeGpa = snapshot.cumulativeGpa;
        this.classRank = snapshot.classRank;
        this.historicalRank = snapshot.historicalRank;
        this.studentId = snapshot.studentId;
    }
}
exports.GetStudentSnapshotDto = GetStudentSnapshotDto;
//# sourceMappingURL=get-student-snapshot.dto.js.map