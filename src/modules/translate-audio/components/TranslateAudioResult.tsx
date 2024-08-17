import { TbCopy } from "react-icons/tb";
import Textarea from "@/common/components/Textarea";
import Button from "@/common/components/Button";

const TranslateAudioResult = () => {
  return (
    <div className="border rounded-b-lg">
      <Textarea
        disabled
        placeholder="Translation"
        className="border-none resize-none disabled:opacity-100"
      />
      <div className="flex justify-end w-full p-2">
        <Button className="gap-2">
          <TbCopy />
          Copy
        </Button>
      </div>
    </div>
  );
};

export default TranslateAudioResult;
