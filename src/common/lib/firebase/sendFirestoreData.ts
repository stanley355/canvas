import getConfig from "next/config";
import initFirebaseApp from "./initFirebaseApp";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const { APP_ENV } = getConfig().publicRuntimeConfig;

interface ISendFirestoreData {
  collectionID: string;
  documentID?: string;
  data: any;
}

const sendFirestoreData = async (payload: ISendFirestoreData) => {
  if (APP_ENV !== "develop") {
    const app: any = initFirebaseApp();
    const db = getFirestore(app);

    try {
      if (payload.documentID) {
        const docRef = await addDoc(
          collection(db, payload.collectionID, payload.documentID),
          payload.data
        );
        return docRef;
      }
      const docRef = await addDoc(
        collection(db, payload.collectionID),
        payload.data
      );
      return docRef;
    } catch (e) {
      return e;
    }
  }

  return null;
};

export default sendFirestoreData;
