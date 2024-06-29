import axios from "axios";
import { IStudent } from "../../api/students/interfaces";
import { IAuthorError } from "../interfaces";


export const fetchStudents = async (
  userID: string
): Promise<IStudent & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/students?user_id=${userID}`;

  try {
    const { data } = await axios.post(url);
    return data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
