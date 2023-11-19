import React from "react";
import { FaX } from "react-icons/fa6";
import Button from "@/common/components/Button";
import { useTranslate } from "../lib/useTranslate";

const TranslateClearBtn = () => {
  const { dispatch } = useTranslate();
  return (
    <Button
      type="button"
      id="clear_text_btn"
      ariaLabel="clear_text_btn"
      wrapperClassName="absolute top-1 right-1 bg-black border-l border-b flex items-center p-1 rounded-md"
      onClick={() => {
        dispatch({
          type: "SET",
          name: "translateText",
          value: "",
        });
      }}
    >
      <FaX className="text-2xl" />
    </Button>
  );
};

export default TranslateClearBtn;
