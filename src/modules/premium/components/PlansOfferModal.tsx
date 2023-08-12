import React from "react";
import Image from "next/image";
import Button from "@/common/components/Button";
import { FaSkating, FaTimes, FaTimesCircle } from "react-icons/fa";

interface IPlansOfferModal {
  onCloseClick: () => void;
}

const PlansOfferModal = (props: IPlansOfferModal) => {
  const { onCloseClick } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-70">
      <div className="border border-blue-900 bg-gradient-to-b from-white via-slate-300 to-white bg-blue-500 rounded-md p-4 py-8 text-black mt-28 w-full lg:w-[400px] lg:mx-auto relative">
        <Button
          type="button"
          onClick={onCloseClick}
          wrapperClassName="absolute top-2 right-2 text-2xl "
          buttonClassName="w-full h-full"
        >
          <FaTimesCircle />
        </Button>
        <h1 className="flex items-center justify-center text-2xl">
          <span>Language</span>
          <Image
            src="/images/languageai.png"
            alt="LanguageAI"
            width={30}
            height={30}
          />
        </h1>
        <div className="text-3xl text-center font-semibold mt-4 mb-2">
          Exclusive Offer
        </div>
        <div className="text-2xl text-center font-semibold mb-4">
          Level up your Game
        </div>
        <div className="text-center text-lg italic">
          *Let&apos;s make it <b>Easy</b> by Upgrading your Plans to{" "}
          <b>Premium</b>
        </div>
        <Button
          type="link"
          href="/plans/"
          wrapperClassName="cursor-pointer font-bold w-full text-center text-white p-2 rounded mt-4 bg-blue-900"
          buttonClassName="w-full h-full flex items-center justify-center gap-2"
        >
          <span>Let&apos;s Go</span>
          <FaSkating />
        </Button>
        <Button
          type="link"
          href="/plans/"
          title="What can Premium Offer?"
          wrapperClassName="cursor-pointer font-bold w-full text-center p-2 rounded mt-4 bg-transparent text-black underline"
          buttonClassName="w-full h-full flex items-center justify-center gap-2"
        />
      </div>
    </div>
  );
};

export default PlansOfferModal;
