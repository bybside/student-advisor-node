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
exports.CareerFitController = void 0;
const common_1 = require("@nestjs/common");
const career_fit_repository_1 = require("./career-fit.repository");
const get_career_fit_by_occupation_dto_1 = require("./dto/get-career-fit-by-occupation.dto");
const get_career_fit_by_student_dto_1 = require("./dto/get-career-fit-by-student.dto");
let CareerFitController = class CareerFitController {
    constructor(_repo) {
        this._repo = _repo;
    }
    async getCareerFitByStudent(snapshotId) {
        const careerFitByStudent = await this._repo.getCareerFitByStudent(snapshotId);
        return careerFitByStudent.map((cf) => new get_career_fit_by_student_dto_1.GetCareerFitByStudentDto(cf));
    }
    async getCareerFitByOccupation(snapshotId) {
        const careerFitByOccupation = await this._repo.getCareerFitByOccupation(snapshotId);
        return careerFitByOccupation.map((cf) => new get_career_fit_by_occupation_dto_1.GetCareerFitByOccupationDto(cf));
    }
};
__decorate([
    (0, common_1.Get)("student/:snapshotId"),
    __param(0, (0, common_1.Param)("snapshotId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CareerFitController.prototype, "getCareerFitByStudent", null);
__decorate([
    (0, common_1.Get)("occupation/:snapshotId"),
    __param(0, (0, common_1.Param)("snapshotId", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CareerFitController.prototype, "getCareerFitByOccupation", null);
CareerFitController = __decorate([
    (0, common_1.Controller)("career-fit"),
    __metadata("design:paramtypes", [career_fit_repository_1.CareerFitRepository])
], CareerFitController);
exports.CareerFitController = CareerFitController;
//# sourceMappingURL=career-fit.controller.js.map