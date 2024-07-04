import Image from "next/image";
import { TbArrowLeft } from "react-icons/tb";
import NextButton from "./NextButton";
import Modal from "./Modal";
import NextLink from "./NextLink";
import { PiStudentDuotone } from "react-icons/pi";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";

interface MonthlyLimitModalProps {
  onCloseClick: () => void;
}

const MonthlyLimitModal = (props: MonthlyLimitModalProps) => {
  const { onCloseClick } = props;

  return (
    <Modal>
      <div className="mt-[20%] lg:mt-[5%] bg-white rounded-lg lg:w-[400px] lg:mx-auto relative">
        <NextButton
          className="absolute top-0 left-0 p-2 border-transparent"
          variant="outline"
          onClick={onCloseClick}
        >
          <TbArrowLeft />
          <span>Back</span>
        </NextButton>
        <Image
          src="/images/exceed_limit.png"
          width={350}
          height={400}
          alt="LanguageAi Limit"
          className="w-full h-auto rounded-t-lg"
        />
        <div className="p-4 px-6 text-center">
          <div className="text-2xl font-bold">
            You reached free Languageai 10x/month limit
          </div>
          <div className="mb-4">
            Don&apos;t worry, you can have 10x free use again next month.
          </div>
          <div className="mb-4">or</div>
          <div className="font-semibold">
            Apply Student Plan for FREE unlimited use
          </div>
          <NextLink
            href="/students/application"
            className="justify-center"
            onClick={() => {
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.limit_modal_student);
              onCloseClick();
            }}
          >
            <PiStudentDuotone />
            <span>Apply</span>
          </NextLink>
          <div className="my-4 text-center">or</div>
          <div className="font-semibold">
            Upgrade to Premium for unlimited use
          </div>
          <NextLink
            href="/plans/premium/"
            className="justify-center"
            onClick={() => {
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.limit_modal_premium);
              onCloseClick();
            }}
          >
            Upgrade
          </NextLink>
        </div>
      </div>
    </Modal>
  );
};

export default MonthlyLimitModal;
