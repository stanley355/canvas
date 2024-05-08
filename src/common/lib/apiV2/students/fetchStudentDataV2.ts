import axios from "axios";
import { IStudent } from "../../api/students/interfaces";
import { IAuthorErrorResponse } from "../authorErrorInterface";

export const fetchStudentDataV2 = async (user_id: string): Promise<IStudent & IAuthorErrorResponse> => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/students/`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `?user_id=${user_id}`,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    return error?.response?.data ? error.response.data : {};
  }
};
