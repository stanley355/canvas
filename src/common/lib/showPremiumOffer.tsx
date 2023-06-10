import Cookies from "js-cookie";

export const showPremiumOffer = () => {
  const token = Cookies.get("token");
  const offerCount = Cookies.get("offer_count");

  if (token) {
    return true;
  }

  if (offerCount && Number(offerCount) === 10) {
    Cookies.set("offer_count", String(1));
    return true;
  }

  const count = offerCount ? (Number(offerCount) + 1) : 1;
  Cookies.set("offer_count", String(count));
  return false;
};
