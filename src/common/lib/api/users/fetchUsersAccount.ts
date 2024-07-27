import axios from "axios";
import { IUser } from "./interfaces";
import { IStudent } from "../students/interfaces";
import { ISubscription } from "../subscriptions/interfaces";

interface IResponse {
  user: IUser;
  student: IStudent | null;
  subscription: ISubscription | null;
  subscriptions: ISubscription[];
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
