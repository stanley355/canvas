import getConfig from "next/config";
import { initializeApp } from "firebase/app";

const {
  APP_ENV,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = getConfig().publicRuntimeConfig;

const initFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB_vsJIee4nI_BSg6qETkUgWfvEXBhQG9Q",
    authDomain: "canvas-d06f8.firebaseapp.com",
    projectId: "canvas-d06f8",
    storageBucket: "canvas-d06f8.appspot.com",
    messagingSenderId: "986067471113",
    appId: "1:986067471113:web:0638ed951b74031701e1d8",
    measurementId: "G-8GCRHCQDMS"
  };
  // const firebaseConfig = {
  //   apiKey: FIREBASE_API_KEY,
  //   authDomain: FIREBASE_AUTH_DOMAIN,
  //   projectId: FIREBASE_PROJECT_ID,
  //   storageBucket: FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: FIREBASE_MESSAGING_SENDER,
  //   appId: FIREBASE_APP_ID,
  //   measurementId: FIREBASE_MEASUREMENT_ID,
  // };

  if (APP_ENV !== "develop") {
    const app = initializeApp(firebaseConfig);
    return app;
  }
};

export default initFirebaseApp;
