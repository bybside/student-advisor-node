import { User } from "@prisma/client";
export declare class GetUserDto {
    name: string;
    email: string;
    constructor(user: User);
}
