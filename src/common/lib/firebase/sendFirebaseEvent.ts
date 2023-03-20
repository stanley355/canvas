import { getAnalytics, logEvent } from "firebase/analytics";

export const sendFirebaseEvent = (name: string, param: any) => {
  const analytics = getAnalytics();
  logEvent(analytics, name, param);
};
