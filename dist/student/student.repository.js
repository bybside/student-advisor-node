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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../data/db.service");
let StudentRepository = class StudentRepository {
    constructor(_client) {
        this._client = _client;
    }
    async getAllStudents() {
        try {
            return await this._client.student.findMany({
                include: {
                    occupation: true
                }
            });
        }
        catch (err) {
            throw err;
        }
    }
    async getAllStudentsByGradYear(gradYear) {
        try {
            return await this._client.student.findMany({
                where: {
                    gradYear: gradYear
                }
            });
        }
        catch (err) {
            throw err;
        }
    }
    async getStudent(id) {
        try {
            return await this._client.student.findUnique({
                where: {
                    id: id
                }
            });
        }
        catch (err) {
            throw err;
        }
    }
    async createStudent(newStudent) {
        try {
            return await this._client.student.create({
                data: Object.assign({}, newStudent)
            });
        }
        catch (err) {
            throw err;
        }
    }
};
StudentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], StudentRepository);
exports.StudentRepository = StudentRepository;
//# sourceMappingURL=student.repository.js.map