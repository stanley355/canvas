import { toast } from "react-toastify";
import { useTranslateV2 } from "../lib/useTranslateV2";
import { Button } from "@/common/components/ui/button";
import { fetchAIChatCompletionV2 } from "@/common/lib/api/ai/fetchAIChatCompletionV2";
import { IChatCompletionRes } from "@/common/lib/api/ai/aiAPIInterfaces";
import { useState } from "react";
import { TbProgress } from "react-icons/tb";

const TranslateSourceTextareaBtn = () => {
  const { translateStates, dispatch } = useTranslateV2();
  const { sourceText, targetLanguage } = translateStates;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (!sourceText) {
      toast.warning("Text could not be empty");
      return;
    }

    if (sourceText.split(" ").length > 5000) {
      toast.warning("Text can't be more than 5000 words");
      return;
    }

    setIsLoading(true);
    const system = `You are a translator. Translate the text to ${targetLanguage.value}`;
    const translateRes: IChatCompletionRes = await fetchAIChatCompletionV2(
      system,
      sourceText
    );

    if (translateRes.id) {
      setIsLoading(false);
      dispatch({
        type: "SET",
        name: "translatedText",
        value: translateRes.choices[0].message.content,
      });
      return;
    }

    setIsLoading(false);
    toast.error("Server Busy, please try again");
    return;
  };

  return (
    <Button className="w-fit" onClick={handleClick} disabled={isLoading}>
      {isLoading ? (
        <div className="flex items-center gap-2">
          <TbProgress className="text-lg animate-spin" />
          <span>Loading</span>
        </div>
      ) : (
        "Translate"
      )}
    </Button>
  );
};

export default TranslateSourceTextareaBtn;
