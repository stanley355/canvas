import getConfig from "next/config";
import initFirebaseApp from "./initFirebaseApp";
import {
  getFirestore,
  updateDoc,
  doc,
} from "firebase/firestore";

const { APP_ENV } = getConfig().publicRuntimeConfig;

interface IUpdateFirestoreData {
  collectionID: string;
  documentID: string;
  data: any;
}

const updateFirestoreData = async (payload: IUpdateFirestoreData) => {
  if (APP_ENV !== "develop") {
    const app: any = initFirebaseApp();
    const db = getFirestore(app);

    try {
      const docRef = await updateDoc(
        doc(db, payload.collectionID, payload.documentID),
        payload.data
      );
      return docRef;
    } catch (e) {
      return e;
    }
  }

  return null;
};

export default updateFirestoreData;
