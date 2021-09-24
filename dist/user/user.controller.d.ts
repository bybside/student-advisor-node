import { GetUserDto } from "./dto/get-user.dto";
import { UserRepository } from "./user.repository";
export declare class UserController {
    private readonly _repo;
    constructor(_repo: UserRepository);
    getAllUsers(): Promise<GetUserDto[]>;
}
