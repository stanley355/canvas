export const calcSubscriptionCost = (duration: string) => {
  switch (duration) {
    case "Monthly":
      return 25000;
    case "Quarterly":
      return 70000;
    case "HalfYearly":
      return 150000;
    case "Yearly":
      return 299000;
    default:
      return 25000;
  }
};
