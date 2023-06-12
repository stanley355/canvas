import React from "react";
import Link from "next/link";
import { SiTaichilang } from "react-icons/si";
import Button from "@/common/components/Button";

interface IPremiumCheckbotModal {
  onCloseClick: () => void;
}

const PremiumCheckbotModal = (props: IPremiumCheckbotModal) => {
  const { onCloseClick } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-90">
      <div className="border border-white bg-black rounded-md p-4 lg:px-8 py-8 flex flex-col items-center justify-center lg:w-1/3 mt-28 mx-auto">
        <h1 className="flex flex-row items-center justify-center text-2xl font-bold mb-4">
          <SiTaichilang />
          <span className="ml-2">LanguageAI</span>
        </h1>
        <div className="text-2xl text-center font-semibold my-4">Hi bro, would you like to try our Premium Checkbot?</div>

        <div className="text-lg italic mb-2">1. Language Check is updated with <strong>real time language data</strong> </div>
        <div className="text-lg italic mb-2">2. Checkbot quality is <strong>10x more quality</strong>  than non-premium</div>
        <div className="text-lg italic">
          3. Start Premium with <strong>Rp1000</strong>, we only charge Rp1 per
          <Link className="mx-2 underline text-blue-300" href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">word/token</Link>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 mt-8 text-lg">
          <Button type="button" title="Later" wrapperClassName="w-full border border-white rounded text-center p-2" buttonClassName="w-full hover:underline" onClick={onCloseClick} />
          <Button type="link" href="/topup/" title="Let me try" wrapperClassName="cursor-pointer font-bold w-full bg-white text-center text-black p-2 rounded hover:underline" buttonClassName="w-full" />
        </div>
      </div>
    </div>
  );
};

export default PremiumCheckbotModal;
