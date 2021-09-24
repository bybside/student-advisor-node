import { CreateStudentDto } from "./dto/create-student.dto";
import { GetStudentDto } from "./dto/get-student.dto";
import { StudentRepository } from "./student.repository";
export declare class StudentController {
    private readonly _repo;
    constructor(_repo: StudentRepository);
    getAllStudents(): Promise<GetStudentDto[]>;
    getAllStudentsByGradYear(gradYear: number): Promise<GetStudentDto[]>;
    getStudent(id: number): Promise<GetStudentDto>;
    createStudent(createStudentDto: CreateStudentDto): Promise<GetStudentDto>;
}
