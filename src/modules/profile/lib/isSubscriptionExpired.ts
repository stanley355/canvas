export const isSubscriptionExpired = (date: string) => {
  const expiryDate = new Date(date);
  const todayDate = new Date();

  return expiryDate < todayDate;
}