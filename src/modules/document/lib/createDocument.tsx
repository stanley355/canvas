import addFirestore from "@/common/lib/firebase/addFirestore";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import axios from "axios";

export interface ICreateDocument {
  user_id: string;
  name: string;
  doc_type: string;
}

export const createDocument = async (payload: ICreateDocument) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/author/documents/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    headers: {
      path: "/",
    },
    data: payload,
  };

  try {
    const { data } = await axios(axiosConfig);
    sendFirebaseEvent("document_create", {});
    return data;
  } catch (error) {
    addFirestore({ collectionID: "document_create_error", data: error });
    return error;
  }
};
