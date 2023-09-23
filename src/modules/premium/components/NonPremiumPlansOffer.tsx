import React from "react";
import Link from "next/link";
import Image from "next/image";
import PlanOptions from "@/modules/plans/components/PlanOptions";
import TransQualityComparisonTable from "@/modules/plans/components/TransQualityComparisonTable";

const NonPremiumPlansOffer = () => (
  <div className="bg-white">
    <h1 className="text-black text-center text-4xl flex font-semibold w-fit mx-auto">
      Love our{" "}
      <Image
        src="/images/languageai.png"
        alt="LanguageAI"
        width={35}
        height={35}
      />{" "}
      ?
    </h1>
    <div className="text-black text-center text-xl">
      Make it Easy with Premium
    </div>
    <div className="container mx-auto bg-white text-black p-4 " id="start">
      <TransQualityComparisonTable />
      <br />
      <PlanOptions />
      <div className="my-8 flex flex-col items-center">
        <div className="text-3xl font-semibold">Satisfied with Our AI?</div>
        <div className="text-lg mb-8">What are you waiting for?</div>
        <Link
          href="/plans/"
          className="border border-gray-500 rounded-[2rem] bg-[#feff69] text-lg font-semibold p-4"
        >
          Get started with <b>Rp.1000</b>!
        </Link>
      </div>
    </div>
  </div>
);

export default NonPremiumPlansOffer;
