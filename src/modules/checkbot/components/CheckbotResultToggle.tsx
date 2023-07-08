import React from "react";
import classNames from "classnames";
import Button from "@/common/components/Button";
import { FaMinusCircle, FaPlus, FaTimes } from "react-icons/fa";

interface ICheckbotResultToggle {
  resultFormat: string;
  updateState: (name: string, value: any) => void;
}

const CheckbotResultToggle = (props: ICheckbotResultToggle) => {
  const { resultFormat, updateState } = props;

  return (
    <div className="grid grid-cols-3 gap-2 mb-2">
      <Button
        type="button"
        wrapperClassName={classNames(
          "w-full border border-red-500 rounded p-1 h-fit",
          resultFormat === "removed"
            ? "bg-red-500 text-white"
            : "text-red-500 bg-white"
        )}
        buttonClassName="w-full flex items-center justify-center gap-1"
        onClick={() => updateState("resultFormat", "removed")}
      >
        <FaTimes />
        Removed
      </Button>
      <Button
        type="button"
        wrapperClassName={classNames(
          "w-full border border-gray-500 rounded p-1 h-fit",
          !resultFormat ? "bg-black text-white" : "text-black bg-white"
        )}
        buttonClassName="w-full flex items-center justify-center gap-1"
        onClick={() => updateState("resultFormat", "")}
      >
        <FaMinusCircle />
        No Diff
      </Button>
      <Button
        type="button"
        wrapperClassName={classNames(
          "w-full border border-green-500 rounded p-1 h-fit",
          resultFormat === "added"
            ? "bg-green-500 text-white"
            : "text-green-500 bg-white"
        )}
        buttonClassName="w-full flex items-center justify-center gap-1"
        onClick={() => updateState("resultFormat", "added")}
      >
        <FaPlus />
        Added
      </Button>
    </div>
  );
};

export default CheckbotResultToggle;
