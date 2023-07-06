import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import Button from "./Button";
import { toast } from "react-toastify";
import addFirestore from "../lib/firebase/addFirestore";

const FeedbackBox = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as any;
    const feedback = target.feedback.value;

    if (!feedback) {
      toast.warning("Oops you forgot to write the text!");
      return;
    }

    toast.success("Thank you for your feedback!");
    addFirestore({
      collectionID: "feedback",
      data: {
        path: window.location.pathname,
        feedback,
      },
    });
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-fit mb-8 lg:w-1/2">
      <div className="flex items-center gap-2 text-lg mb-2">
        <MdOutlineWavingHand />
        <span>Hi! How can we help you more?</span>
      </div>
      <div>
        <label htmlFor="feedback">
          <textarea
            placeholder="Request Feature or Error Report"
            name="feedback"
            className="p-2 rounded w-full text-black"
            rows={5}
          />
        </label>
        <Button
          type="submit"
          title="Send"
          wrapperClassName="my-4 p-1 border border-white"
          buttonClassName="w-full"
        />
      </div>
    </form>
  );
};

export default FeedbackBox;
