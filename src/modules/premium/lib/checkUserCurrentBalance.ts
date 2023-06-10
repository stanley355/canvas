import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { fetchUserData } from "@/modules/profile/lib/fetchUserData";

export const checkUserCurrentBalance = async () => {
  const token = Cookies.get("token");
  const user: any = jwtDecode(String(token));
  const userData = await fetchUserData(user.email);

  return userData.balance > 0;
}