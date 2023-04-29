import React, { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import classNames from "classnames";
import Button from "@/common/components/Button";
import addFirestoreData from "@/common/lib/firebase/addFirestoreData";

const TranslateReview = () => {
  const [translateQuality, setTranslateQuality] = useState("");

  const handleGoodBadOnClick = async (quality: "good" | "bad") => {
    setTranslateQuality(quality);
    await addFirestoreData({
      collectionID: "translate_review",
      data: {
        quality,
        created_at: new Date(),
      },
    });

    return "";
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-semibold my-4">
        How was the translation ?
      </div>
      <div className="flex flex-row w-full justify-evenly">
        <Button
          type="button"
          buttonClassName="flex flex-col items-center"
          onClick={() => handleGoodBadOnClick("good")}
        >
          <FaRegThumbsUp
            className={classNames(
              "border rounded-full p-2 text-5xl hover:bg-white hover:text-black",
              translateQuality === "good" ? "bg-white text-black" : ""
            )}
          />
          <div>Good</div>
        </Button>
        <Button
          type="button"
          buttonClassName="flex flex-col items-center"
          onClick={() => handleGoodBadOnClick("bad")}
        >
          <FaRegThumbsDown
            className={classNames(
              "border rounded-full p-2 text-5xl hover:bg-white hover:text-black",
              translateQuality === "bad" ? "bg-white text-black" : ""
            )}
          />
          <div>Bad</div>
        </Button>
      </div>
    </div>
  );
};

export default TranslateReview;
