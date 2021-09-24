import { Test, TestingModule } from "@nestjs/testing"
import { StudentController } from "./student.controller"
import { StudentRepository } from "./student.repository"

describe("StudentController", () => {
    let studentController: StudentController

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [StudentController],
            providers: [StudentRepository],
        }).compile()

        studentController = app.get<StudentController>(StudentController)
    })

    it("should be defined", () => {
        expect(studentController).toBeDefined()
    })
})