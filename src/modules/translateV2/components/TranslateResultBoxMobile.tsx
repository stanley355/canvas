import { Button } from "@/common/components/ui/button";
import React from "react";
import { useTranslateV2 } from "../lib/useTranslateV2";
import { toast } from "react-toastify";
import { cn } from "@/common/lib/cn";
import { TbCopy } from "react-icons/tb";

const TranslateResultBoxMobile = () => {
  const { translateStates } = useTranslateV2();
  const { translatedText } = translateStates;

  const copyText = () => {
    window.navigator.clipboard.writeText(translatedText);
    toast.info("Text copied to Clipboard");
  };

  return (
    <div
      className={cn(
        "pb-2 bg-gray-100 border-b",
        translatedText ? "block" : "hidden"
      )}
    >
      <div className="p-2 text-sm min-h-[25vh]">{translatedText}</div>
      <Button className="ml-[76%] flex items-center gap-2" onClick={copyText}>
        <TbCopy />
        <span>Copy</span>
      </Button>
    </div>
  );
};

export default TranslateResultBoxMobile;
