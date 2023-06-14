import React from "react";
import {
  FaLanguage,
  FaRobot,
  FaPlusCircle,
  FaPlusSquare,
} from "react-icons/fa";
import Button from "@/common/components/Button";

const HomeCopywriting = () => {

  const TranslateCopywriting = () => (
    <div>

    </div>
  )

  return (
    <div className="px-4 py-12">
      <h3 className="my-4 text-4xl text-center lg:text-5xl">
        Not Just English, but World Languages!
      </h3>
      <div className="text-xl lg:text-3xl text-center my-4 hidden lg:block">
        European, African, or Asian languages are all possible!
      </div>
      <div className="grid grid-cols-1" >
        <TranslateCopywriting />
      </div>
    </div>
  )
};

export default HomeCopywriting;
