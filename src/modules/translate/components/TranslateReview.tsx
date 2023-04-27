import React, { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import Button from "@/common/components/Button";
import sendFirestoreData from "@/common/lib/firebase/sendFirestoreData";

const TranslateReview = () => {
  const [reviewID, setReviewID] = useState("");
  const [showTextReview, setShowTextReview] = useState(false);

  const TextReview = () => (
    <form onSubmit={(e) => {}}>
      <input type="text" placeholder="How can we improve?" />
      <Button type="button" title="Submit" />
    </form>
  );

  const handleGoodBadOnClick = async (quality: "good" | "bad") => {
    const firestoreRes: any = await sendFirestoreData({
      collectionName: "translate_review",
      data: {
        quality,
        review: "",
      },
    });

    if (firestoreRes && firestoreRes.id) {
      setReviewID(firestoreRes.id);
      setShowTextReview(true);
    }

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
          <FaRegThumbsUp className="border rounded-full p-2 text-5xl hover:bg-white hover:text-black" />
          <div>Good</div>
        </Button>
        <Button
          type="button"
          buttonClassName="flex flex-col items-center"
          onClick={() => handleGoodBadOnClick("bad")}
        >
          <FaRegThumbsDown className="border rounded-full p-2 text-5xl hover:bg-white hover:text-black" />
          <div>Bad</div>
        </Button>
      </div>
      {showTextReview && <TextReview />}
    </div>
  );
};

export default TranslateReview;
