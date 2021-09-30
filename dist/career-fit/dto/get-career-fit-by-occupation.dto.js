"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCareerFitByOccupationDto = void 0;
class GetCareerFitByOccupationDto {
    constructor(careerFit) {
        this.scoreRank = Number(careerFit.scoreRank);
        this.occupationId = careerFit.occupationId;
    }
}
exports.GetCareerFitByOccupationDto = GetCareerFitByOccupationDto;
//# sourceMappingURL=get-career-fit-by-occupation.dto.js.map