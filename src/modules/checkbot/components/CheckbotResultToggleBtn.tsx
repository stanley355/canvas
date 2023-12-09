import React from "react";
import classNames from "classnames";
import { FaCircleMinus, FaPlus, FaX } from "react-icons/fa6";

import Button from "@/common/components/Button";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { CheckbotResultFormatEnum } from "../lib/checkbotStates";
import { useCheckbot } from "../lib/useCheckbot";

const CheckbotResultToggleBtn = () => {
  const { checkbotStates, dispatch } = useCheckbot();
  const { checkbotResultFormat } = checkbotStates;

  return (
    <div className="grid grid-cols-3 gap-2 mb-2">
      <Button
        type="button"
        wrapperClassName={classNames(
          "w-full border border-red-500 rounded h-fit",
          checkbotResultFormat === CheckbotResultFormatEnum.Removed
            ? "bg-red-500 text-white"
            : "text-red-500 bg-white"
        )}
        buttonClassName="w-full flex items-center justify-center gap-1 p-1.5"
        onClick={() => {
          sendFirebaseEvent("checkbot_removed_format");
          dispatch({
            type: "SET",
            name: "checkbotResultFormat",
            value: CheckbotResultFormatEnum.Removed,
          });
        }}
      >
        <FaX className="text-sm" />
        Dibuang
      </Button>
      <Button
        type="button"
        wrapperClassName={classNames(
          "w-full border border-gray-500 rounded h-fit",
          checkbotResultFormat === CheckbotResultFormatEnum.NoDiff
            ? "bg-black text-white"
            : "text-black bg-white"
        )}
        buttonClassName="w-full flex items-center justify-center gap-1 p-1.5"
        onClick={() =>
          dispatch({
            type: "SET",
            name: "checkbotResultFormat",
            value: CheckbotResultFormatEnum.NoDiff,
          })
        }
      >
        <FaCircleMinus />
        Normal
      </Button>
      <Button
        type="button"
        wrapperClassName={classNames(
          "w-full border border-green-500 rounded h-fit",
          checkbotResultFormat === CheckbotResultFormatEnum.Added
            ? "bg-green-500 text-white"
            : "text-green-500 bg-white"
        )}
        buttonClassName="w-full flex items-center justify-center gap-1 p-1.5"
        onClick={() => {
          sendFirebaseEvent("checkbot_added_format");
          dispatch({
            type: "SET",
            name: "checkbotResultFormat",
            value: CheckbotResultFormatEnum.Added,
          });
        }}
      >
        <FaPlus />
        Ditambahkan
      </Button>
    </div>
  );
};

export default CheckbotResultToggleBtn;
