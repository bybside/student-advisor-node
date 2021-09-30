import { GetStudentSnapshotDto } from "./dto/get-student-snapshot.dto";
import { StudentSnapshotRepository } from "./student-snapshot.repository";
export declare class StudentSnapshotController {
    private readonly _repo;
    constructor(_repo: StudentSnapshotRepository);
    getSnapshotByStudentId(studentId: number): Promise<GetStudentSnapshotDto>;
}
