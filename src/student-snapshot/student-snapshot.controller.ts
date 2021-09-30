import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { StudentSnapshot } from "@prisma/client";
import { GetStudentSnapshotDto } from "./dto/get-student-snapshot.dto";
// import { GetStudentSnapshotDto } from "./dto/get-student-snapshot.dto";
import { StudentSnapshotRepository } from "./student-snapshot.repository";

@Controller("student-snapshots")
export class StudentSnapshotController {
    public constructor(private readonly _repo: StudentSnapshotRepository) { }

    @Get(":studentId")
    public async getSnapshotByStudentId(
        @Param("studentId", ParseIntPipe) studentId: number
    ): Promise<GetStudentSnapshotDto> {
        const snapshot: StudentSnapshot = await this._repo.getSnapshotByStudentId(studentId)
        return new GetStudentSnapshotDto(snapshot)
    }
}