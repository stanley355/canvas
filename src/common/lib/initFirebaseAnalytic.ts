import getConfig from "next/config";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const { BASE_URL, APP_ENV } = getConfig().publicRuntimeConfig;

const initFirebaseAnalytic = async () => {
  const configURL = `${BASE_URL}api/firebase-config/`;
  const firebaseConfig: any = await axios.get(configURL, {});

  if (APP_ENV !== "develop") {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }
};

export default initFirebaseAnalytic;
