import { User } from '@prisma/client';
import { UserRepository } from "src/services/repositories/user.repository";
export declare class AppController {
    private readonly _repo;
    constructor(_repo: UserRepository);
    getAllUsers(): Promise<User[]>;
}
