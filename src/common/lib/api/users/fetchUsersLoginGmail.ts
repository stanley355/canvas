import axios from "axios";
import { JwtPayload } from "jsonwebtoken";
import { IAuthorError } from "../interfaces";

interface IResponse {
  token: string;
}

export const fetchUsersLoginGmail = async (
  payload: JwtPayload
): Promise<IResponse & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/users/login/gmail`;
  const req = {
    fullname: payload.name,
    email: payload.email,
  };

  try {
    const { data } = await axios.post(url, req);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
