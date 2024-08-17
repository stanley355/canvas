import axios from "axios";
import { IAuthorError } from "../interfaces";

type TRequest = {
  email: string;
  password: string;
};

type TResponse = {
  token: string;
};

export const fetchUsersLogin = async (
  request: TRequest
): Promise<TResponse & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/users/login/`;

  try {
    const { data } = await axios.post(url, request);
    return data;
  } catch (error: any) {
    return error?.response?.data
      ? error?.response.data
      : { status: 500, status_text: "Login fail, please try again" };
  }
};
