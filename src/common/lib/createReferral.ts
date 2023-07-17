import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export const createReferral = async (friendID: string) => {
  const token: any = Cookies.get("token");
  const user : any = jwtDecode(token);

  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/referral/`;
  const referralPayload = {
    user_id: user.id,
    friend_id: friendID,
  };
  const axiosConfig = {
    method: "POST",
    url: URL,
    data: referralPayload,
  };

  const { data } = await axios(axiosConfig);
  return data;
};