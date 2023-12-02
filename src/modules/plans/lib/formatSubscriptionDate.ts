export const formatSubscriptionStartDate = () => {
  const date = new Date();
  date.setDate(date.getDate());
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "full" }).format(date);
};

export const formatSubscriptionEndDate = (duration: string) => {
  const endDay = () => {
    switch (duration) {
      case "Monthly":
        return 31;
      case "Quarterly":
        return 90;
      case "HalfYearly":
        return 180;
      case "Yearly":
        return 365;
      default:
        return 31;
    }
  };
  const date = new Date();
  date.setDate(date.getDate() + endDay());
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "full" }).format(date);
};
