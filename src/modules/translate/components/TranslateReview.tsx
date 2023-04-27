import React, {useState} from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import Button from "@/common/components/Button";

const TranslateReview = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-semibold my-4">How was the translation ?</div>
      <div className="flex flex-row w-full justify-evenly">
        <Button type="button" buttonClassName="flex flex-col items-center">
          <FaRegThumbsUp className="border rounded-full p-2 text-5xl hover:bg-white hover:text-black" />
          <div>Good</div>
        </Button>
        <Button type="button" buttonClassName="flex flex-col items-center">
          <FaRegThumbsDown className="border rounded-full p-2 text-5xl hover:bg-white hover:text-black" />
          <div>Bad</div>
        </Button>
      </div>
    </div>
  );
};

export default TranslateReview;
