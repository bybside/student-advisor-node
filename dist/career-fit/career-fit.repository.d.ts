import { CareerFitByOccupation, CareerFitByStudent } from ".prisma/client";
import { DbService } from "src/data/db.service";
export declare class CareerFitRepository {
    private readonly _client;
    constructor(_client: DbService);
    getCareerFitByStudent(snapshotId: number): Promise<CareerFitByStudent[]>;
    getCareerFitByOccupation(snapshotId: number): Promise<CareerFitByOccupation[]>;
}
