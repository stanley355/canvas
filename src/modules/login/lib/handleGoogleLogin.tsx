import Router from "next/router";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

export const handleGoogleLogin = async (token: any) => {
  sendFirebaseEvent("login", {});
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

  const { data } = await axios(axiosConfig);
  if (data && data.token) {
    sendFirebaseEvent("google_login", {});
    Cookies.set("token", data.token);
    window.location.reload();
    return "";
  }

  if (data && data.error) {
    toast.error(data.message);
    return "";
  }

  toast.error("Something went wrong, please try again");
  return "";
};
