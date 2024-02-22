export const formatSubscriptionDate = (date: string) => {
  const dateFormat = new Date(date);
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(
    dateFormat
  );
};
