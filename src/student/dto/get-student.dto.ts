import { Student } from "@prisma/client";

/**
 * default access modifier for class properties and methods is public
 */

export class GetStudentDto {
    id: number
    firstName: string
    lastName: string
    dob: Date

    public constructor(student: Student) {
        this.id = student.id
        this.firstName = student.firstName
        this.lastName = student.lastName
        this.dob = student.dob
    }
}