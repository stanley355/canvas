import getConfig from "next/config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const { APP_ENV, FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID } = getConfig().publicRuntimeConfig;

const initFirebaseAnalytic = () => {
  const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
  };

  if (APP_ENV !== "develop") {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }
};

export default initFirebaseAnalytic;
