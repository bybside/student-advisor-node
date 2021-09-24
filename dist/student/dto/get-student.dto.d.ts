import { Student } from "@prisma/client";
export declare class GetStudentDto {
    id: number;
    firstName: string;
    lastName: string;
    dob: Date;
    constructor(student: Student);
}
