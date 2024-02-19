import React, { useEffect } from "react";
import { getAnalytics } from "firebase/analytics";
import { FirebaseContext } from "../lib/firebase/firebaseContext";
import initFirebaseApp from "../lib/firebase/initFirebaseApp";

const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const firebaseApp = initFirebaseApp();

  useEffect(() => {
    if (firebaseApp) {
      getAnalytics(firebaseApp);
    }
  }, [firebaseApp]);

  return (
    <FirebaseContext.Provider value={{ firebaseApp }}>
      {children}
    </FirebaseContext.Provider>
  );
};
export default FirebaseProvider;
