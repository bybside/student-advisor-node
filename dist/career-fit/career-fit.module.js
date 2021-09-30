"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareerFitModule = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../data/db.service");
const career_fit_controller_1 = require("./career-fit.controller");
const career_fit_repository_1 = require("./career-fit.repository");
let CareerFitModule = class CareerFitModule {
};
CareerFitModule = __decorate([
    (0, common_1.Module)({
        controllers: [career_fit_controller_1.CareerFitController],
        providers: [career_fit_repository_1.CareerFitRepository, db_service_1.DbService]
    })
], CareerFitModule);
exports.CareerFitModule = CareerFitModule;
//# sourceMappingURL=career-fit.module.js.map