import { createContext } from "react";
import initFirebaseApp from "../lib/initFirebaseApp";

export const FirebaseContext = createContext({
  firebaseApp: initFirebaseApp(),
});
