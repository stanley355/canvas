import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";
import { isSubscriptionExpired } from "@/modules/profile/lib/isSubscriptionExpired";

export const showOfferModal = (): Boolean => {
  const token = Cookies.get("token");
  if (token) {
    const subscriptionCookie = Cookies.get("subscription");
    const subscription = subscriptionCookie
      ? JSON.parse(subscriptionCookie)
      : null;
    const subscriptionExpired = subscription?.id
      ? isSubscriptionExpired(subscription.end_at)
      : true;
    const user: any = decode(token);

    return subscriptionExpired && !user.balance;
  }

  return false;
};
