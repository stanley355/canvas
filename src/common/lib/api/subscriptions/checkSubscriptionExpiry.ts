export const checkSubscriptionExpiry = (subscriptionEndDate: string): boolean => {
  const expiryDate = new Date(subscriptionEndDate);
  const todayDate = new Date();

  return todayDate > expiryDate;
};
