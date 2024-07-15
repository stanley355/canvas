import NextTextarea from "@/common/components/NextTextarea";
import NextButton from "@/common/components/NextButton";
import { copyToClipboard } from "@/common/lib/copyToClipboard";
import { TbCopy } from "react-icons/tb";

interface PhoneticTranscriptionsResultProps {
  resultText: string
}

const PhoneticTranscriptionsResult = ({ resultText }: PhoneticTranscriptionsResultProps) => {
  return (
    <div className="relative mb-4">
      <NextTextarea
        readOnly
        placeholder="Transcription"
        value={resultText}
        className="border-gray-100 bg-gray-100 resize-none h-72 pr-12 focus:border-gray-100 hover:border-gray-100"
      />
      <NextButton
        className="absolute bottom-4 right-2 lg:right-3 lg:bottom-2 p-2"
        onClick={() => copyToClipboard(resultText)}
      >
        <TbCopy />
        <span>Copy</span>
      </NextButton>
    </div>
  );
};

export default PhoneticTranscriptionsResult;
