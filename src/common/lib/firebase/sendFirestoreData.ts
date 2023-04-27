import getConfig from "next/config";
import initFirebaseApp from "./initFirebaseApp";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const { APP_ENV } = getConfig().publicRuntimeConfig;

interface ISendFirestoreData {
  collectionName: string;
  documentName?: string;
  data: any;
}

const sendFirestoreData = async (payload: ISendFirestoreData) => {
  if (APP_ENV !== "develop") {
    const app: any = initFirebaseApp();
    const db = getFirestore(app);

    try {
      if (payload.documentName) {
        const docRef = await addDoc(
          collection(db, payload.collectionName, payload.documentName),
          payload.data
        );
        return docRef;
      }
      const docRef = await addDoc(
        collection(db, payload.collectionName),
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
