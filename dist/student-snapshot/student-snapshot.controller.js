"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSnapshotController = void 0;
const common_1 = require("@nestjs/common");
const get_student_snapshot_dto_1 = require("./dto/get-student-snapshot.dto");
const student_snapshot_repository_1 = require("./student-snapshot.repository");
let StudentSnapshotController = class StudentSnapshotController {
    constructor(_repo) {
        this._repo = _repo;
    }
    async getSnapshotByStudentId(studentId) {
        const snapshot = await this._repo.getSnapshotByStudentId(studentId);
        return new get_student_snapshot_dto_1.GetStudentSnapshotDto(snapshot);
    }
};
__decorate([
    (0, common_1.Get)(":studentId"),
    __param(0, (0, common_1.Param)("studentId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentSnapshotController.prototype, "getSnapshotByStudentId", null);
StudentSnapshotController = __decorate([
    (0, common_1.Controller)("student-snapshots"),
    __metadata("design:paramtypes", [student_snapshot_repository_1.StudentSnapshotRepository])
], StudentSnapshotController);
exports.StudentSnapshotController = StudentSnapshotController;
//# sourceMappingURL=student-snapshot.controller.js.map