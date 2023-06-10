import Cookies from "js-cookie";

export const hasFreeTrial = () => {
  const token = Cookies.get("token");
  const trial_count = Cookies.get("trial_count");

  if (token) {
    return true;
  }

  if (trial_count && Number(trial_count) === 3) {
    return false;
  }

  const count = trial_count ? (Number(trial_count) + 1) : 1;
  Cookies.set("trial_count", String(count));
  return true;
};
