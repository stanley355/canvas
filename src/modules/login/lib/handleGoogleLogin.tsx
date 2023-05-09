import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import jwt from "jsonwebtoken";

interface IDecodedToken {
  name: string;
  email: string;
}

export const handleGoogleLogin = async (token: CredentialResponse) => {
  const decodedToken: any = jwt.verify(String(token), "secret");

  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/users/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/login/gmail",
    },
    data: {
      fullname: decodedToken.name,
      email: decodedToken.email,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    console.log(data);
    return data;
  } catch (err: any) {
    console.error(err);
    return "";
  }
};
