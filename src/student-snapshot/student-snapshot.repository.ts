import { Injectable } from "@nestjs/common";
import { StudentSnapshot } from "@prisma/client";
import { DbService } from "src/data/db.service";

/**
 * following the Data Mapper design pattern
 * facilitates communication between program and StudentSnapshot table
 */

@Injectable()
export class StudentSnapshotRepository {
    public constructor(private readonly _client: DbService) { }

    public async getSnapshotByStudentId(studentId: number): Promise<StudentSnapshot> {
        try {
            return this._client.studentSnapshot.findFirst({
                where: {
                    studentId: studentId
                },
                orderBy: {
                    createdAt: "desc"
                }
            })
        }
        catch (err) {
            throw err
        }
    }
}