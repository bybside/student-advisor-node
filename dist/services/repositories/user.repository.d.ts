import { User } from "@prisma/client";
import { DbService } from "src/services/data/db.service";
export declare class UserRepository {
    private readonly _client;
    constructor(_client: DbService);
    getAllUsers(): Promise<User[]>;
    addUser(newUser: any): Promise<User>;
}
