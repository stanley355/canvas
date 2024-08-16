import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";

import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { fetchUsersLoginGmail } from "@/common/lib/api/users/fetchUsersLoginGmail";

import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";

export const handleGoogleLogin = async (token: any) => {
  sendFirebaseEvent(FIREBASE_EVENT_NAMES.login.login);
  sendFirebaseEvent(FIREBASE_EVENT_NAMES.login.loginGoogle);
  const decodedToken = decode(String(token.credential)) as JwtPayload;
  const loginRes = await fetchUsersLoginGmail(decodedToken);

  if (loginRes?.token) {
    Cookies.set("token", loginRes.token);
    const redirectPath =
      window.location.pathname === "/" ||
      window.location.pathname === "/account/login"
        ? "/account"
        : window.location.pathname;
    window.location.href = redirectPath;
    return loginRes;
  }

  if (loginRes?.status_text) {
    toast.error(loginRes.status_text);
    return loginRes;
  }

  toast.error("Login fail, please try again");
  return loginRes;
};
