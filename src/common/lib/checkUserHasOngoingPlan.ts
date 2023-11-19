import { decode } from "jsonwebtoken";
import { checkSubscriptionExpiry } from "./api/subscriptions/checkSubscriptionExpiry";
import { fetchUserSubscription } from "./api/subscriptions/fetchUserSubscription";
import { fetchUserByEmail } from "./api/users/fetchUserByEmail";
import { IUser } from "./api/users/userInterfaces";

export const checkUserHasOngoingPlan = async (user: IUser) => {
  const subscription = await fetchUserSubscription(user.id);

  if (subscription?.id) {
    const isSubscriptionExpired = checkSubscriptionExpiry(subscription?.end_at);

    if (isSubscriptionExpired) {
      const userData = await fetchUserByEmail(user?.email);
      return userData?.balance > 0;
    }

    return true;
  }

  return false;
};
