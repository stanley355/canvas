import { toast } from "react-toastify";
import { Button } from "@/common/components/ui/button"
import { useTranslateV2 } from "../lib/useTranslateV2"
import { fetchAIChatCompletionV2 } from "@/common/lib/api/ai/fetchAIChatCompletionV2";
import { IChatCompletionRes } from "@/common/lib/api/ai/aiAPIInterfaces";

const TranslateSourceTextareaBtn = () => {
  const { translateStates, dispatch } = useTranslateV2();
  const { sourceText, targetLanguage } = translateStates;

  const handleClick = async () => {
    if (!sourceText) {
      toast.warning("Text could not be empty");
      return;
    }

    if (sourceText.split(" ").length > 5000) {
      toast.warning("Text can't be more than 5000 words");
      return;
    }

    const system = `You are a translator. Translate the text to ${targetLanguage.value}`;
    const translateRes: IChatCompletionRes = await fetchAIChatCompletionV2(system, sourceText);

    if (translateRes.id) {
      dispatch({
        type: "SET",
        name: "translatedText",
        value: translateRes.choices[0].message.content
      });
      return;
    }

    toast.error("Server Busy, please try again");
    return;
  }

  return (
    <Button className='w-fit' onClick={handleClick}>Translate</Button>
  )
}

export default TranslateSourceTextareaBtn