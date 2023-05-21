import axios from "axios";

export interface ILoginUser {
  email: string;
  password: string;
}

export const loginUser = async (payload: ILoginUser) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/users/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/login/",
    },
    data: payload,
  };

  const { data } = await axios(axiosConfig);
  return data;
};
