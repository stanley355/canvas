import { StudentInstitutionLevel } from "@/common/lib/api/students/fetchStudent";

export interface IAccountStudentFormStates {
  studentID: string;
  studentEmail: string;
  institutionLevel: StudentInstitutionLevel | string,
  institutionName: string;
}

export const ACCOUNT_STUDENT_FORM_STATES: IAccountStudentFormStates = {
  studentID: "",
  studentEmail: "",
  institutionLevel: "",
  institutionName: "",
}