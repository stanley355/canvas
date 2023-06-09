import axios from "axios";

export interface IRegisterUser {
  fullname: string;
  email: string;
  password: string;
}

export const registerUser = async (payload: IRegisterUser) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/users/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/register/",
    },
    data: payload,
  };

  const { data } = await axios(axiosConfig);
  return data;
};
