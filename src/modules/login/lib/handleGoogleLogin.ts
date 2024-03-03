import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { fetchUserGmailLogin } from "@/common/lib/api/users/fetchUserGmailLogin";

export const handleGoogleLogin = async (token: any) => {
  sendFirebaseEvent("login");
  const decodedToken = decode(String(token.credential)) as JwtPayload;
  const loginRes = await fetchUserGmailLogin(decodedToken);

  if (loginRes.token) {
    sendFirebaseEvent("google_login");
    Cookies.set("token", loginRes.token);
    window.location.href = "/account/";
    return loginRes;
  }

  toast.error(loginRes.data.message);
  return loginRes;
};
