import Router from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { fetchActiveSubscription } from "@/modules/profile/lib/fetchActiveSubscription";

export const handleGoogleLogin = async (token: any) => {
  sendFirebaseEvent("login", {});
  const decodedToken: any = decode(String(token.credential));

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
  if (data?.token) {
    sendFirebaseEvent("google_login", {});
    const user:any = decode(data?.token);
    const userSubscriptions = await fetchActiveSubscription(user.id);

    Cookies.set("token", data.token);
    Cookies.set("subscription", JSON.stringify(userSubscriptions));

    const path = Router.asPath;
    if (path === "/register" || path === "/login") {
      window.location.href = "/";
      return;
    }

    window.location.reload();
    return;
  }

  if (data?.error) {
    toast.error(data.message);
    return "";
  }

  toast.error("Something went wrong, please try again");
  return "";
};
