"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const career_fit_module_1 = require("./career-fit/career-fit.module");
const student_snapshot_module_1 = require("./student-snapshot/student-snapshot.module");
const student_module_1 = require("./student/student.module");
const subject_performance_module_1 = require("./subject-performance/subject-performance.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [student_module_1.StudentModule, student_snapshot_module_1.StudentSnapshotModule, career_fit_module_1.CareerFitModule, subject_performance_module_1.SubjectPerformanceModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map