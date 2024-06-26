import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { fetchUsersLoginGmail } from "@/common/lib/api/users/fetchUsersLoginGmail";
import { LOGIN_FAIL_MESSAGE } from "./constant";
import { FIREBASE_EVENT_NAMES } from "@/common/lib/firebase/firebaseEventNames";

export const handleGoogleLogin = async (token: any) => {
  sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.login);
  const decodedToken = decode(String(token.credential)) as JwtPayload;
  const loginRes = await fetchUsersLoginGmail(decodedToken);

  if (loginRes?.token) {
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.login.login);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.login.loginGoogle);
    Cookies.set("token", loginRes.token);
    const redirectPath =
      window.location.pathname === "/" || window.location.pathname === "/login"
        ? "/account"
        : window.location.pathname;
    window.location.href = redirectPath;
    return loginRes;
  }

  if (loginRes?.statusText) {
    toast.error(loginRes.statusText);
    return loginRes;
  }

  toast.error(LOGIN_FAIL_MESSAGE);
  return loginRes;
};
