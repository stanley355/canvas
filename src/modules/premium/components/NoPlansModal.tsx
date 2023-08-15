import React from "react";
import Image from "next/image";
import Button from "@/common/components/Button";
import { FaSkating } from "react-icons/fa";

const NoPlansModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-70">
      <div className="border border-blue-900 bg-gradient-to-b from-white via-slate-300 to-white bg-blue-500 rounded-md p-4 py-8 text-black mt-28 w-full lg:w-[400px] lg:mx-auto">
        <h1 className="flex items-center justify-center text-2xl">
          <span>Language</span>
          <Image
            src="/images/languageai.png"
            alt="LanguageAI"
            width={30}
            height={30}
          />
        </h1>
        <div className="text-3xl text-center font-semibold my-4">
          You are levelling up your game
        </div>
        <div className="text-center text-lg italic">
          *Let&apos;s make it <b>Easy</b> by Upgrading your Plans for Premium
          Access with only <b>Rp1.000</b>!
        </div>

        <Button
          type="link"
          href="/plans/"
          title="Let's Go"
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

export default NoPlansModal;
