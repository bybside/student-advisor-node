import { User } from '@prisma/client';
import { UserRepository } from './repositories/user.repository';
export declare class AppController {
    private readonly _repo;
    constructor(_repo: UserRepository);
    getAllUsers(): Promise<User[]>;
}
