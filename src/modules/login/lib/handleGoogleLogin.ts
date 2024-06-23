import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { fetchUsersLoginGmail } from "@/common/lib/api/users/fetchUsersLoginGmail";
import { LOGIN_FAIL_MESSAGE } from "./constant";

export const handleGoogleLogin = async (token: any) => {
  sendFirebaseEvent("login");
  sendFirebaseEvent("login_google");

  const decodedToken = decode(String(token.credential)) as JwtPayload;
  const loginRes = await fetchUsersLoginGmail(decodedToken);

  if (loginRes?.token) {
    Cookies.set("token", loginRes.token);
    window.location.href = "/account/";
    return loginRes;
  }

  if (loginRes?.statusText) {
    toast.error(loginRes.statusText);
    return loginRes;
  }

  toast.error(LOGIN_FAIL_MESSAGE);
  return loginRes;
};
