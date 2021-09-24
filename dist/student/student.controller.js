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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const create_student_dto_1 = require("./dto/create-student.dto");
const get_student_dto_1 = require("./dto/get-student.dto");
const student_repository_1 = require("./student.repository");
let StudentController = class StudentController {
    constructor(_repo) {
        this._repo = _repo;
    }
    async getAllStudents() {
        const students = await this._repo.getAllStudents();
        return students.map((student) => new get_student_dto_1.GetStudentDto(student));
    }
    async getAllStudentsByGradYear(gradYear) {
        const students = await this._repo.getAllStudentsByGradYear(gradYear);
        return students.map((student) => new get_student_dto_1.GetStudentDto(student));
    }
    async getStudent(id) {
        const student = await this._repo.getStudent(id);
        return new get_student_dto_1.GetStudentDto(student);
    }
    async createStudent(createStudentDto) {
        const newStudent = await this._repo.createStudent(createStudentDto);
        return new get_student_dto_1.GetStudentDto(newStudent);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getAllStudents", null);
__decorate([
    (0, common_1.Get)("class"),
    __param(0, (0, common_1.Query)("gradYear", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getAllStudentsByGradYear", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudent", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createStudent", null);
StudentController = __decorate([
    (0, common_1.Controller)("students"),
    __metadata("design:paramtypes", [student_repository_1.StudentRepository])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map