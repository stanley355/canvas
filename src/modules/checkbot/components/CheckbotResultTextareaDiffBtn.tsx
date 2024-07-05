import { memo } from "react";
import { TbPlus, TbMinus } from "react-icons/tb";
import NextButton from "@/common/components/NextButton";
import { CheckbotDiff } from "./CheckbotResultTextarea";
import { MdAutoAwesome } from "react-icons/md";
import { cn } from "@/common/lib/cn";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";

interface CheckbotResulTextareaDiffBtnProps {
  activeDiff: CheckbotDiff;
  setActiveDiff: (diff: CheckbotDiff) => void;
}

const CheckbotResulTextareaDiffBtn = (
  props: CheckbotResulTextareaDiffBtnProps
) => {
  const { activeDiff, setActiveDiff } = props;

  return (
    <div className="rounded-lg flex">
      <NextButton
        variant="outline"
        onClick={() => {
          sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.checkbot_added);
          setActiveDiff(CheckbotDiff.Added)
        }}
        className={cn(
          "w-full rounded-none justify-center border-none hover:text-brand-primary",
          activeDiff === CheckbotDiff.Added && "bg-green-900 text-white"
        )}
      >
        <TbPlus />
        Added
      </NextButton>
      <NextButton
        onClick={() => setActiveDiff(CheckbotDiff.Base)}
        className="w-full rounded-none justify-center border-none"
        variant={activeDiff === CheckbotDiff.Base ? "default" : "outline"}
      >
        <MdAutoAwesome />
        Base
      </NextButton>
      <NextButton
        variant="outline"
        onClick={() => {
          sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.checkbot_removed);
          setActiveDiff(CheckbotDiff.Removed)
        }}
        className={cn(
          "w-full rounded-none justify-center border-none hover:text-brand-primary",
          activeDiff === CheckbotDiff.Removed && "bg-red-900 text-white "
        )}
      >
        <TbMinus />
        Removed
      </NextButton>
    </div>
  );
};

export default memo(CheckbotResulTextareaDiffBtn);
