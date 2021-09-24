import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common"
import { Student } from "@prisma/client";
import { CreateStudentDto } from "./dto/create-student.dto";
import { GetStudentDto } from "./dto/get-student.dto";
import { StudentRepository } from "./student.repository";

@Controller("students")
export class StudentController {
    public constructor(private readonly _repo: StudentRepository) { }

    @Get()
    public async getAllStudents(): Promise<GetStudentDto[]> {
        const students: Student[] = await this._repo.getAllStudents()
        // manually mapping Prisma User model object to custom Get User DTO;
        // options for JS AutoMapper (.NET) equivalent?
        return students.map((student) => new GetStudentDto(student))
    }

    @Get("class")
    public async getAllStudentsByGradYear(
        @Query("gradYear", ParseIntPipe) gradYear: number
    ): Promise<GetStudentDto[]> {
        const students: Student[] = await this._repo.getAllStudentsByGradYear(gradYear)
        return students.map((student) => new GetStudentDto(student))
    }

    @Get(":id")
    public async getStudent(
        @Param("id", ParseIntPipe) id: number
    ): Promise<GetStudentDto> {
        const student: Student = await this._repo.getStudent(id)
        return new GetStudentDto(student)
    }

    @Post("create")
    public async createStudent(@Body() createStudentDto: CreateStudentDto): Promise<GetStudentDto> {
        const newStudent: Student = await this._repo.createStudent(createStudentDto)
        return new GetStudentDto(newStudent)
    }
}