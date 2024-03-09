import axios from "axios";
import { axiosErrorHandler } from "../axiosErrorHandler";
import { JwtPayload } from "jsonwebtoken";

export const fetchUserGmailLogin = async (req: JwtPayload) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/users/`;
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
  } catch (error) {
    const err = axiosErrorHandler(URL, error);
    return err;
  }
};
