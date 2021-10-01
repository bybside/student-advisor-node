import { SubjectPerformance } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { DbService } from "src/data/db.service";

/**
 * following the Data Mapper design pattern
 * facilitates communication between program and SubjectPerformance table
 */

@Injectable()
export class SubjectPerformanceRepository {
    public constructor(private readonly _client: DbService) { }

    public async getSubjectPerformancesBySnapshot(snapshotId: number): Promise<SubjectPerformance[]> {
        try {
            return this._client.subjectPerformance.findMany({
                where: {
                    snapshotId: snapshotId
                }
            })
        }
        catch (err) {
            throw err
        }
    }
}