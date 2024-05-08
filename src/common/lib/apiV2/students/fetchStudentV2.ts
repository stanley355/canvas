import axios from "axios";
import { IStudent } from "../../api/students/interfaces";
import { IAuthorErrorResponse } from "../authorErrorInterface";

export enum StudentInstitutionLevel {
  JuniorHigh = "JuniorHigh",
  SeniorHigh = "SeniorHigh",
  College = "College",
}

interface IFetchStudentV2Request {
  user_id: string;
  student_id: string;
  student_email?: string;
  student_card_img_url?: string;
  institution_level: StudentInstitutionLevel;
  institution_name: string;
}

export const fetchStudentV2 = async (payload: IFetchStudentV2Request): Promise<IStudent & IAuthorErrorResponse> => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/students/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: `/`,
    },
    data: {
      user_id: payload.user_id,
      student_id: payload.student_id,
      ...(payload.student_email && { student_email: payload.student_email }),
      ...(payload.student_card_img_url && {
        student_card_img_url: payload.student_card_img_url,
      }),
      institution_level: payload.institution_level,
      institution_name: payload.institution_name,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    return error?.response?.data ? error.response.data : {};
  }
};
