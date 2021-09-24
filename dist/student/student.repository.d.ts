import { Student } from ".prisma/client";
import { DbService } from "src/data/db.service";
import { CreateStudentDto } from "./dto/create-student.dto";
export declare class StudentRepository {
    private readonly _client;
    constructor(_client: DbService);
    getAllStudents(): Promise<Student[]>;
    getAllStudentsByGradYear(gradYear: number): Promise<Student[]>;
    getStudent(id: number): Promise<Student>;
    createStudent(newStudent: CreateStudentDto): Promise<Student>;
}
