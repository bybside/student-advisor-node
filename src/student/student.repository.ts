import { Student } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { DbService } from "src/data/db.service";
import { CreateStudentDto } from "./dto/create-student.dto";

/**
 * following the Data Mapper design pattern
 * facilitates communication between program and Student table
 */

@Injectable()
export class StudentRepository {
    public constructor(private readonly _client: DbService) { }

    public async getAllStudents(): Promise<Student[]> {
        try {
            return await this._client.student.findMany({
                include: {
                    occupation: true
                }
            })
        }
        catch (err) {
            throw err
        }
    }

    public async getAllStudentsByGradYear(gradYear: number): Promise<Student[]> {
        try {
            return await this._client.student.findMany({
                where: {
                    gradYear: gradYear
                }
            })
        }
        catch (err) {
            throw err
        }
    }

    public async getStudent(id: number): Promise<Student> {
        try {
            return await this._client.student.findUnique({
                where: {
                    id: id
                }
            })
        }
        catch (err) {
            throw err
        }
    }

    public async createStudent(newStudent: CreateStudentDto): Promise<Student> {
        try {
            return await this._client.student.create({
                data: {
                    ...newStudent
                }
            })
        } catch (err) {
            throw err
        }
    }
}