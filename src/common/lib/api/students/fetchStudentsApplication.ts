import axios from "axios";
import { StudentInstitutionLevel } from "@/modules/students/lib/StudentInstitutionLevel";
import { IStudent } from "../../api/students/interfaces";
import { IAuthorError } from "../interfaces";

interface IRequest {
  user_id: string;
  student_id: string;
  student_email?: string;
  student_card_img_url?: string;
  institution_level: StudentInstitutionLevel;
  institution_name: string;
}

export const fetchStudentsApplication = async (
  req:IRequest 
): Promise<IStudent & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/students/application/`;

  try {
    const { data } = await axios.post(url, req);
    return data;
  } catch (error: any) {
    return error?.response?.data ? error.response.data : {};
  }
};
