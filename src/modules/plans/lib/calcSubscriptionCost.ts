export const calcSubscriptionCost = (duration: string) => {
  switch (duration) {
    case "Monthly":
      return 25000
    case "Quarterly":
      return 70000
    case "HalfYearly":
      return 150.000
    case "Yearly":
      return 299000
  }
}