import axios from "axios";
import { IUser } from "./interfaces";

interface IResponse {
  user: IUser;
  active_student_discount: Record<string, string | number>;
  active_subscription: Record<string, string | number>;
  topups: Record<string, string | number>[];
}

export const fetchUsersAccount = async (id: string): Promise<IResponse> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/users/account?id=${id}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
