import addFirestore from "@/common/lib/firebase/addFirestore";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import axios from "axios";

export const translateDocumentRow = async (
  promptText: string,
  targetLanguage: string
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/translate/`;
  const axiosConfig = {
    method: "POST",
    url: URL,
    data: {
      promptText,
      targetLanguage,
    },
  };

  try {
    const { data } = await axios(axiosConfig);
    sendFirebaseEvent("translate_doc_row", {});
    return data;
  } catch (error) {
    addFirestore({ collectionID: "translate_doc_row_error", data: error });
    return error;
  }
};
