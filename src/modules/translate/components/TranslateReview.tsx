import React, { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import classNames from "classnames";
import Button from "@/common/components/Button";
import addFirestoreData from "@/common/lib/firebase/addFirestoreData";
import updateFirestoreData from "@/common/lib/firebase/updateFirestoreData";

const TranslateReview = () => {
  const [translateQuality, setTranslateQuality] = useState("");
  const [reviewID, setReviewID] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleImprovementSubmit = async (e: any) => {
    e.preventDefault();
    const improvementInput = e.target.improvement_input.value;

    if (!improvementInput) {
      alert("You haven't filled the text");
      return "";
    }

    setShowThankYou(true);
    await updateFirestoreData({
      collectionID: "translate_review",
      documentID: reviewID,
      data: {
        quality: translateQuality,
        improvement: improvementInput,
      },
    });
  };

  const handleGoodBadOnClick = async (quality: "good" | "bad") => {
    setShowThankYou(false);
    const firestoreRes: any = await addFirestoreData({
      collectionID: "translate_review",
      data: {
        quality,
        improvement: "",
      },
    });

    if (firestoreRes && firestoreRes.id) {
      setReviewID(firestoreRes.id);
      setTranslateQuality(quality);
    }

    return "";
  };

  const ImprovementForm = () => (
    <form onSubmit={handleImprovementSubmit} className="mt-6 w-full lg:w-1/3 lg:mx-auto">
      <input
        type="text"
        placeholder="How can we improve?"
        name="improvement_input"
        className="w-full p-2 rounded-lg text-black"
      />
      <Button
        type="submit"
        title="Submit"
        buttonClassName="p-2 text-center border w-full rounded-md hover:bg-white hover:text-black"
        wrapperClassName="text-center mt-2"
      />
    </form>
  );

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
      {translateQuality && <ImprovementForm />}
      {showThankYou && <div className="text-4xl text-center my-4">Thank you for your review!</div>}
    </div>
  );
};

export default TranslateReview;
