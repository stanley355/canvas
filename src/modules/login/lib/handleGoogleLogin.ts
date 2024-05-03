import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { fetchUsersV2LoginGmail } from "@/common/lib/apiV2/users/fetchUsersV2LoginGmail";

export const handleGoogleLogin = async (token: any) => {
  sendFirebaseEvent("login");
  const decodedToken = decode(String(token.credential)) as JwtPayload;
  const loginRes = await fetchUsersV2LoginGmail(decodedToken);

  if (loginRes.token !== "") {
    sendFirebaseEvent("google_login");
    Cookies.set("token", loginRes.token);
    window.location.href = "/account/";
    return loginRes;
  }

  toast.error("Server busy, please try again");
  return loginRes;
};
