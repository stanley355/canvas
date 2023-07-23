import React from "react";
import Link from "next/link";
import { SiTaichilang } from "react-icons/si";
import Button from "@/common/components/Button";

interface IInsufficientBalanceModal {
  onCloseClick: () => void;
}

const InsufficientBalanceModal = (props: IInsufficientBalanceModal) => {
  const { onCloseClick } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-90">
      <div className="border border-white bg-black rounded-md p-4 py-8 flex flex-col items-center justify-center lg:w-1/3 mt-28 mx-auto">
        <h1 className="flex flex-row items-center justify-center text-2xl font-bold mb-4">
          <SiTaichilang />
          <span className="ml-2">LanguageAI</span>
        </h1>
        <div className="text-2xl text-center font-semibold my-4">
          Oops you don't have enough quota for Premium
        </div>
        <div className="text-center text-lg italic">
          *Topup and Start Premium with <strong>Rp1000</strong> or  <strong>$1 SGD</strong>, we only charge
          Rp1 per
          <Link
            className="mx-2 underline text-blue-300"
            href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them"
          >
            word/token
          </Link>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 mt-8 text-lg">
          <Button
            type="button"
            title="Later"
            wrapperClassName="w-full border border-white text-center p-2"
            buttonClassName="w-full hover:underline"
            onClick={onCloseClick}
          />
          <Button
            type="link"
            href="/topup/"
            title="Let's Go"
            wrapperClassName="cursor-pointer font-bold w-full bg-white text-center text-black p-2 rounded hover:underline"
            buttonClassName="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default InsufficientBalanceModal;
