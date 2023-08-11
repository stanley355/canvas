export const formatSubscriptionMonth = (duration: string) => {
  switch (duration) {
    case "Monthly":
      return "1 Month";
    case "Quarterly":
      return "3 Months";
    case "HalfYearly":
      return "6 Months";
    case "Yearly":
      return "12 Months";
  }
};
