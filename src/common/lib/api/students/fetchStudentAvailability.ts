import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";

export const fetchStudentAvailability = async (id: string) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/students/`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `/availability?user_id=${id}`,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    return error?.response?.data ? error.response.data : {};
  }
};
