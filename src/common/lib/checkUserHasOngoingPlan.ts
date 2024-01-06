import { decode } from "jsonwebtoken";
import { checkSubscriptionExpiry } from "./api/subscriptions/checkSubscriptionExpiry";
import { fetchUserSubscription } from "./api/subscriptions/fetchUserSubscription";
import { fetchUserByEmail } from "./api/users/fetchUserByEmail";
import { IUser } from "./api/users/userInterfaces";

interface ICheckUserHasOngoingPlanOutput {
  isSubscription: boolean;
  hasOngoingPlan: boolean;
  showPaylaterOffer: boolean;
}

export const checkUserHasOngoingPlan = async (
  user: IUser
): Promise<ICheckUserHasOngoingPlanOutput> => {
  const subscription = await fetchUserSubscription(user.id);

  if (subscription?.id) {
    const isSubscriptionExpired = checkSubscriptionExpiry(subscription?.end_at);

    if (isSubscriptionExpired) {
      const userData = await fetchUserByEmail(user?.email);
      return {
        isSubscription: false,
        hasOngoingPlan: userData?.balance > 0,
        showPaylaterOffer: false,
      };
    }

    return {
      isSubscription: true,
      hasOngoingPlan: true,
      showPaylaterOffer: false,
    };
  }
  const userData = await fetchUserByEmail(user?.email);
  return {
    isSubscription: false,
    hasOngoingPlan: userData?.balance > 0,
    showPaylaterOffer: userData?.balance === 0,
  };
};
