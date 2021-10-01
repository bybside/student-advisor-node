import { SubjectPerformance } from "@prisma/client";
import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { GetSubjectPerformanceDto } from "./dto/get-subject-performance.dto";
import { SubjectPerformanceRepository } from "./subject-performance.repository";

@Controller("subject-performance")
export class SubjectPerformanceController {
    public constructor(private readonly _repo: SubjectPerformanceRepository) { }

    @Get(":snapshotId")
    public async getSubjectPerformancesBySnapshot(
        @Param("snapshotId", ParseIntPipe) snapshotId: number
    ): Promise<GetSubjectPerformanceDto[]> {
        const performances: SubjectPerformance[] = await this._repo.getSubjectPerformancesBySnapshot(snapshotId)
        return performances.map((perf) => new GetSubjectPerformanceDto(perf))
    }
}