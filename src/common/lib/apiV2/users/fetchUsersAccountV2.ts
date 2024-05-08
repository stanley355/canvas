import axios from "axios";
import { IUser } from "../../api/users/interfaces";

interface IFetchUsersAccountV2Response {
  user: IUser;
  active_student_discount: Record<string, string | number>;
  active_subscription: Record<string, string | number>;
  topups: Record<string, string | number>[];
}

export const fetchUsersAccountV2 = async (
  id: string
): Promise<IFetchUsersAccountV2Response> => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/users/`;
  const axiosConfig = {
    method: "GET",
    url: URL,
    headers: {
      path: `/account?id=${id}`,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
