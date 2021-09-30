import { CareerFitByOccupation, CareerFitByStudent } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { DbService } from "src/data/db.service";

/**
 * following the Data Mapper design pattern
 * facilitates communication between program and CareerFitByStudent & CareerFitByOccupation tables
 */

@Injectable()
export class CareerFitRepository {
    public constructor(private readonly _client: DbService) { }

    public async getCareerFitByStudent(snapshotId: number): Promise<CareerFitByStudent[]> {
        try {
            return await this._client.careerFitByStudent.findMany({
                where: {
                    snapshotId: snapshotId
                }
            })
        }
        catch (err) {
            throw err
        }
    }

    public async getCareerFitByOccupation(snapshotId: number): Promise<CareerFitByOccupation[]> {
        try {
            return await this._client.careerFitByOccupation.findMany({
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