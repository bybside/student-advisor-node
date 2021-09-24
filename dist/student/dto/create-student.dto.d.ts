export declare class CreateStudentDto {
    id: number;
    firstName: string;
    middleName?: string;
    lastName?: string;
    dob: Date;
    gradYear: number;
    active: boolean;
    occupationId?: number;
}
