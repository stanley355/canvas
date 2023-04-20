import getConfig from "next/config";
import { getAnalytics, logEvent } from "firebase/analytics";

const { APP_ENV } = getConfig().publicRuntimeConfig;

export const sendFirebaseEvent = (name: string, param: any) => {
  if (APP_ENV !== "develop") {
    const analytics = getAnalytics();
    logEvent(analytics, name, param);
  }
};
