
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";

export const reduceUserBalanceToken = (reduceAmount: number) => {
  const token = Cookies.get("token");
  const user: any = jwtDecode(String(token));

  const tokenPayload = {
    ...user,
    balance: user.balance - reduceAmount
  };

  const newToken = jwt.sign(tokenPayload, "secret");
  return newToken;
}