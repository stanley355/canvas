import Cookies from "js-cookie";
import { fetchUserData } from "@/common/lib/fetchUserData";
import { decode } from "jsonwebtoken";

export const checkUserCurrentBalance = async () => {
  const token = Cookies.get("token");
  const user: any = decode(String(token));
  const userData = await fetchUserData(user.email);

  return userData?.balance > 0;
};
