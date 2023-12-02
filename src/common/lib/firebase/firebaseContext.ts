import { createContext } from "react";
import initFirebaseApp from "./initFirebaseApp";

export const FirebaseContext = createContext({
  firebaseApp: initFirebaseApp(),
});
