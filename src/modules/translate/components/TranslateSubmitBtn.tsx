import React, { useState } from "react";
import classNames from "classnames";
import { FaSpinner } from "react-icons/fa6";
import Button from "@/common/components/Button";

const TranslateSubmitBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-1/2 absolute right-1 bottom-3">
      <Button
        type="submit"
        // disabled={isLoading}
        wrapperClassName={classNames(
          "bg-blue-900 text-white rounded-md font-semibold text-center w-1/2 ml-auto"
          //   isLoading ? "w-fit" : "w-1/3"
        )}
        buttonClassName="w-full h-full p-2"
      >
        {/* {isLoading ? (
                  <div className="flex flex-row items-center justify-center">
                    <span className="mr-2">Please wait a moment</span>
                    <FaSpinner className="animate-spin" />
                  </div>
                ) : (
                  "Translate"
                )} */}
        Translate
      </Button>
    </div>
  );
};

export default TranslateSubmitBtn;
