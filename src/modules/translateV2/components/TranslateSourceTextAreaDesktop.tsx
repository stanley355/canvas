import { Textarea } from "@/common/components/ui/textarea";
import { Button } from "@/common/components/ui/button";
import { TbX } from "react-icons/tb";
import { useTranslateV2 } from "../lib/useTranslateV2";
import TranslateSourceTextareaBtn from "./TranslateSourceTextareaBtn";

const TranslateSourceTextareaDesktop = () => {
  const { translateStates, dispatch } = useTranslateV2();
  const { sourceText } = translateStates;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: "SET",
      name: "sourceText",
      value: e.target.value,
    });

    return;
  };

  return (
    <div className="relative pb-2 border rounded-md">
      <Button
        variant={"ghost"}
        className="absolute top-0 right-0"
        onClick={() => {
          dispatch({
            type: "SET",
            name: "sourceText",
            value: "",
          });
        }}
      >
        <TbX className="text-2xl" />
      </Button>
      <Textarea
        placeholder="Enter Text"
        onChange={handleChange}
        value={sourceText}
        className="h-[25vh] border-none resize-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      <div className="flex items-center justify-between px-2">
        <div className="text-sm">
          {sourceText.length > 0 ? sourceText.split(" ").length : "0"} / 5000
        </div>
        <TranslateSourceTextareaBtn />
      </div>
    </div>
  );
};

export default TranslateSourceTextareaDesktop;
