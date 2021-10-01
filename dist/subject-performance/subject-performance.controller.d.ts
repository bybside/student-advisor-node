import { GetSubjectPerformanceDto } from "./dto/get-subject-performance.dto";
import { SubjectPerformanceRepository } from "./subject-performance.repository";
export declare class SubjectPerformanceController {
    private readonly _repo;
    constructor(_repo: SubjectPerformanceRepository);
    getSubjectPerformancesBySnapshot(snapshotId: number): Promise<GetSubjectPerformanceDto[]>;
}
