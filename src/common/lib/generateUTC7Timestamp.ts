// Function to pad single-digit numbers with leading zeros
const pad = (number: number) => {
  if (number < 10) {
    return "0" + number;
  }
  return number;
};

export const generateUTC7Timestamp = () => {
  // Get the current date and time in UTC+7 (WIB) time zone
  const currentDate = new Date();
  const utcOffset = 7 * 60; // UTC+7 offset in minutes
  const currentUTC7Time = new Date(currentDate.getTime() - (utcOffset * 60000));

  // Generate the timestamp in UTC+0 (ISO 8601) format
  const timestamp =
    currentUTC7Time.getUTCFullYear() +
    "-" +
    pad(currentUTC7Time.getUTCMonth() + 1) +
    "-" +
    pad(currentUTC7Time.getUTCDate()) +
    "T" +
    pad(currentUTC7Time.getUTCHours()) +
    ":" +
    pad(currentUTC7Time.getUTCMinutes()) +
    ":" +
    pad(currentUTC7Time.getUTCSeconds()) +
    "Z";

  return timestamp;
};
