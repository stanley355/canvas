import React from "react";
import Link from "next/link";
import Button from "@/common/components/Button";

interface IProfileBalance {
  balance: number;
}

const ProfileBalance = (props: IProfileBalance) => {
  const { balance } = props;

  return (
    <div className="mt-8 lg:w-1/3">
      <div className="font-semibold text-lg">
        Oops you are running out of balance!
      </div>
      <div className="border p-2 my-2">Rp {balance}</div>
      <div className="my-2">
        *Topup more balance so you can access our Premium Translation and
        Checkbot (Better Result & Correction)
      </div>
      <div>
        **You can even start Premium with <strong>Rp1000</strong>, we only charge Rp1 per
        <Link className="mx-2 underline text-blue-300" href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">word/token</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <Button
          type="link"
          href="/premium/"
          title="Premium"
          wrapperClassName="border border-white p-2 bg-white text-black text-center rounded font-semibold hover:bg-transparent hover:text-white"
          buttonClassName="w-full"
        />
        <Button
          type="link"
          href="/topup/"
          title="Topup"
          wrapperClassName="border border-white p-2 bg-white text-black text-center rounded font-semibold hover:bg-transparent hover:text-white"
          buttonClassName="w-full"
        />
      </div>
    </div>
  );
};

export default ProfileBalance;
