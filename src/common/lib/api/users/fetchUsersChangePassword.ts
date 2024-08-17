import axios from "axios";
import { IAuthorError } from "../interfaces";

type TRequest = {
  id: string;
  old_password: string;
  new_password: string;
  new_password_again: string;
};

type TResponse = {
  token: string;
};

export const fetchUsersChangePassword = async (
  request: TRequest
): Promise<TResponse & IAuthorError> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/users/change-password/`;

  try {
    const { data } = await axios.put(url, request);
    return data;
  } catch (error: any) {
    return error?.response?.data
      ? error?.response.data
      : { status: 500, status_text: "Change password fail, please try again" };
  }
};
