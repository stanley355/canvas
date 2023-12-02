import React, { useEffect } from "react";
import { FirebaseContext } from "../lib/firebase/firebaseContext";
import initFirebaseApp from "../lib/firebase/initFirebaseApp";
import { getAnalytics } from "firebase/analytics";

const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const firebaseApp = initFirebaseApp();

  useEffect(() => {
    if (firebaseApp) {
      const analy = getAnalytics(firebaseApp);
      console.log(analy);
      
    }
  }, [firebaseApp]);

  return (
    <FirebaseContext.Provider value={{ firebaseApp }}>
      {children}
    </FirebaseContext.Provider>
  );
};
export default FirebaseProvider;
