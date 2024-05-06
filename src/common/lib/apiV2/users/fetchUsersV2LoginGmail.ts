import axios from "axios";
import { JwtPayload } from "jsonwebtoken";

interface IFetchUsersV2LoginGmailResponse {
  token: string;
}

export const fetchUsersV2LoginGmail = async (
  req: JwtPayload
): Promise<IFetchUsersV2LoginGmailResponse> => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/authorv2/users/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/login/gmail/",
    },
    data: {
      fullname: req.name,
      email: req.email,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};