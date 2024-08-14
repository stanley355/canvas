import axios from "axios";
import { IAuthorError } from "../interfaces";

type TRequest = {
  fullname: string;
  email: string;
  password: string;
  password_again: string;
};

type TResponse = {
  token: string;
};

export const fetchUsersRegister = async (
  request: TRequest
): Promise<TResponse & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/users/register/`;

  try {
    const { data } = await axios.post(url, request);
    return data;
  } catch (error: any) {
    return error?.response?.data
      ? error?.response.data
      : { status: 500, statusText: "Register fail, please try again" };
  }
};
