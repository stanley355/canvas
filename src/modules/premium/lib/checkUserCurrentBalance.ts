import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export const checkUserCurrentBalance = (): Boolean => {
  const token = Cookies.get("token");
  const user: any = jwtDecode(String(token));

  return user.balance > 0;
}