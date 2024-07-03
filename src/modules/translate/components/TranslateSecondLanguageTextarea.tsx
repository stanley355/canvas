import { TbCopy } from "react-icons/tb";
import NextButton from "@/common/components/NextButton";
import NextTextarea from "@/common/components/NextTextarea";
import { copyToClipboard } from "@/common/lib/copyToClipboard";

interface TranslateSecondLanguageTextareaProps {
  key: string;
  secondLanguageText: string;
}

const TranslateSecondLanguageTextarea = (
  props: TranslateSecondLanguageTextareaProps
) => {
  const { secondLanguageText } = props;

  return (
    <div className="relative mb-4">
      <NextTextarea
        readOnly
        placeholder="Terjemahan"
        value={secondLanguageText}
        className="border-gray-200 resize-none h-60 pr-12 focus:border-gray-200 hover:border-gray-200"
      />
      <NextButton
        className="absolute bottom-4 right-2 lg:right-3 p-2"
        onClick={() => copyToClipboard(secondLanguageText)}
      >
        <TbCopy />
        <span>Copy</span>
      </NextButton>
    </div>
  );
};

export default TranslateSecondLanguageTextarea;
