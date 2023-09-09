import React from "react";
import Image from "next/image";
import Button from "@/common/components/Button";
import { FaSkating, FaTimes, FaTimesCircle } from "react-icons/fa";

interface IPaidAccessModal {
  onCloseClick: () => void;
}

const PaidAccessModal = (props: IPaidAccessModal) => {
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
        <div className="flex items-center justify-center text-2xl">
          <span>Language</span>
          <Image
            src="/images/languageai.png"
            alt="LanguageAI"
            width={30}
            height={30}
          />
        </div>
        <div className="text-3xl text-center font-semibold mt-4 mb-2">
          You need to upgrade to access this feature
        </div>
        <div className="text-center text-lg italic">
          *Let&apos;s make it <b>Easy</b> by Upgrading with only <b>Rp1.000</b>!
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
      </div>
    </div>
  );
};

export default PaidAccessModal;
