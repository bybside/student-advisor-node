import { StudentSnapshot } from "@prisma/client";
import { DbService } from "src/data/db.service";
export declare class StudentSnapshotRepository {
    private readonly _client;
    constructor(_client: DbService);
    getSnapshotByStudentId(studentId: number): Promise<StudentSnapshot>;
}
