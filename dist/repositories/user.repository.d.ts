import { User } from "@prisma/client";
import { DbService } from "src/data/db.service";
export declare class UserRepository {
    private readonly _client;
    constructor(_client: DbService);
    getAllUsers(): Promise<User[]>;
    addUser(newUser: any): Promise<User>;
}
