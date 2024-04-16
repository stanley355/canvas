import axios from "axios";

export enum InstitutionLevel {
  JuniorHigh = "JuniorHigh",
  SeniorHigh = "SeniorHigh",
  College = "College",
}

interface IFetchStudentData {
  userID: string;
  studentID: string;
  studentEmail?: string;
  studentCardImgUrl?: string;
  institutionLevel: InstitutionLevel
  institutionName: string;
}

export const fetchStudent = async (payload: IFetchStudentData) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/students/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: `/`,
    },
    data: {
      user_id: payload.userID,
      student_id: payload.studentID,
      ...payload.studentEmail && { student_email: payload.studentEmail },
      ...payload.studentCardImgUrl && { student_card_img_url: payload.studentCardImgUrl },
      institution_level: payload.institutionLevel,
      institution_name: payload.institutionName
    }
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    return error?.response?.data ? error.response.data : {};
  }
};
