import Cookies from "js-cookie";

export const hasFreeTrial = () => {
  const token = Cookies.get("token");
  const trial_count = Cookies.get("trial_count");

  if (token) {
    return true;
  }

  if (trial_count) {
    if (Number(trial_count) > 3) {
      return false;
    }
    let count = Number(trial_count) + 1;
    Cookies.set("trial_count", String(count));
    return true;
  } else {
    Cookies.set("trial_count", "1");
    return true;
  }
};
