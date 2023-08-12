export const formatSubscriptionMonth = (duration: string) => {
  switch (duration) {
    case "monthly":
    case "Monthly":
      return "1 Month";
    case "quarterly":
    case "Quarterly":
      return "3 Months";
    case "half_yearly":
    case "HalfYearly":
      return "6 Months";
    case "yearly":
    case "Yearly":
      return "12 Months";
    default:
      return "1 Month";
  }
};
