import { Button } from "@/common/components/ui/button";
import { useTranslateV2 } from "../lib/useTranslateV2";
import { toast } from "react-toastify";
import { TbCopy } from "react-icons/tb";

const TranslateResultBoxDesktop = () => {
  const { translateStates } = useTranslateV2();
  const { translatedText } = translateStates;

  const copyText = () => {
    window.navigator.clipboard.writeText(translatedText);
    toast.info("Text copied to Clipboard");
  };

  return (
    <div className="pb-2 bg-gray-100 border-b rounded-md">
      <div className="p-2  h-[25vh] overflow-scroll text-sm">
        {translatedText}
      </div>
      <Button className="ml-[85%] flex items-center gap-2" onClick={copyText}>
        <TbCopy />
        <span>Copy</span>
      </Button>
    </div>
  );
};

export default TranslateResultBoxDesktop;
