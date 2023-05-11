import Cookies from "js-cookie";

export const countFreeTrial = () => {
  const trial_count = Cookies.get("trial_count");

  if (trial_count) {
    if (Number(trial_count) < 4) {
      let count = Number(trial_count) + 1;
      Cookies.set("trial_count", String(count));
      return Number(trial_count);
    }

    return trial_count;
  }

  Cookies.set("trial_count", "1");
  return 1;
};
