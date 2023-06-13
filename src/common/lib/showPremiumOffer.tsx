import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export const showPremiumOffer = () => {
  const token = Cookies.get("token");
  const offerCount = Cookies.get("offer_count");

  if (token) {
    const user: any = jwtDecode(token);
    const hasBalance = user.balance > 0;
    if (!hasBalance) {
      if (offerCount && Number(offerCount) === 8) {
        Cookies.set("offer_count", String(1));
        return true;
      }

      const count = offerCount ? Number(offerCount) + 1 : 1;
      Cookies.set("offer_count", String(count));
      return false;
    }
  }
};
