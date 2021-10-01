import { SubjectPerformance } from ".prisma/client";
import { DbService } from "src/data/db.service";
export declare class SubjectPerformanceRepository {
    private readonly _client;
    constructor(_client: DbService);
    getSubjectPerformancesBySnapshot(snapshotId: number): Promise<SubjectPerformance[]>;
}
