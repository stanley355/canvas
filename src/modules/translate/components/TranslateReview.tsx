import React, { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import Button from "@/common/components/Button";
import sendFirestoreData from "@/common/lib/firebase/sendFirestoreData";

const TranslateReview = () => {
  const [reviewID, setReviewID] = useState("");
  const [showTextReview, setShowTextReview] = useState(false);

  const handleTextReviewSubmit = async (e: any) => {
    e.preventDefault();

    console.log("hi");
    const improvementInput = e.target.improvement_input.value;

    if (!improvementInput) {
      alert("You haven't filled the text");
      return "";
    }

    const firestoreRes: any = await sendFirestoreData({
      collectionID: "translate_review",
      documentID: reviewID,
      data: {
        quality: "good",
        review: "",
      },
    });

    console.log("res: ", firestoreRes);
  };

  const TextReview = () => (
    <form onSubmit={handleTextReviewSubmit} className="mt-6 w-full">
      <input
        type="text"
        placeholder="How can we improve?"
        name="improvement_input"
        className="w-full p-2 rounded-lg text-black"
      />
      <Button type="submit" title="Submit" buttonClassName="p-2 text-center border w-full rounded-md" wrapperClassName="text-center mt-2" />
    </form>
  );

  const handleGoodBadOnClick = async (quality: "good" | "bad") => {
    const firestoreRes: any = await sendFirestoreData({
      collectionID: "translate_review",
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
      <TextReview />
    </div>
  );
};

export default TranslateReview;
