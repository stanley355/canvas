import axios from "axios";
import { toast } from "react-toastify";
import addFirestoreData from "@/common/lib/firebase/addFirestoreData";

export const fetchCheckbotAndDispatch = async (
  prompt: any,
  dispatch: (content: string) => void
) => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;
  const { data } = await axios.post(URL, prompt);

  if (data && data.choices.length > 0) {
    const content = data.choices[0].message.content;
    dispatch(content);
    return true;
  } else {
    toast.error("Something went wrong, please try again");
    addFirestoreData({
      collectionID: "chatgpt_error",
      data: {
        time: new Date(),
        err: data?.error ? data.error : "Error Unknown",
      },
    });
    return false;
  }
};
