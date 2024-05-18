import { TbCopy } from "react-icons/tb";
import { toast } from "react-toastify";
import { Button } from "@/common/components/ui/button";

interface TranslateResultBoxMobileProps {
  key?: string;
  translatedText: string;
}

const TranslateResultBoxMobile = (props: TranslateResultBoxMobileProps) => {
  const {translatedText} = props;

  const copyText = () => {
    window.navigator.clipboard.writeText(translatedText);
    toast.info("Text copied to Clipboard");
  };

  return (
    <div
      className={"pb-2 bg-gray-100 border-b"}
    >
      <div className="p-2 text-sm h-[25vh]">{translatedText}</div>
      <Button className="ml-[76%] flex items-center gap-2" onClick={copyText}>
        <TbCopy />
        <span>Copy</span>
      </Button>
    </div>
  );
};

export default TranslateResultBoxMobile;
