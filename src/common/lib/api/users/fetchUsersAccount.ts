import axios from "axios";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";

export const fetchUsersAccount = async (
  id: string
): Promise<any > => {
  
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/users/account?id=${id}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
