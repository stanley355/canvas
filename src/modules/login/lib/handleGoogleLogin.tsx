import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

export const handleGoogleLogin = async (token: any) => {
  const decodedToken: any = jwtDecode(String(token.credential));

  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/users/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/login/gmail/",
    },
    data: {
      fullname: decodedToken.name,
      email: decodedToken.email,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    return data;
  } catch (err: any) {
    console.error(err);
    toast.error("Something went wrong, please try again");
  }
};
