import React from "react";
import { FaX } from "react-icons/fa6";
import Button from "@/common/components/Button";
import { useCheckbot } from "../lib/useCheckbot";

const CheckbotClearBtn = () => {
  const { dispatch } = useCheckbot();
  return (
    <Button
      type="button"
      id="clear_text_btn"
      ariaLabel="Bersihkan Cek Grammar"
      wrapperClassName="absolute top-1 right-1 bg-blue-900 text-white border-l border-b flex items-center p-1 rounded-md"
      onClick={() => {
        dispatch({
          type: "SET",
          name: "checkbotText",
          value: "",
        });
      }}
    >
      <FaX className="text-2xl" />
    </Button>
  );
};

export default CheckbotClearBtn;
