import React from "react";
import Link from "next/link";
import ComparisonTable from "@/common/components/ComparisonTable";
import { CHECKBOT_COMPARISON } from "../lib/constant";

const CheckbotComparison = () => {
  return (
    <div className="my-8 mb-16">
      <div className="font-semibold text-lg mb-2">
        Wanna Have Better Checkbot Result? Support us with{" "}
        <Link href="/premium/checkbot/" className="underline text-blue-200">
          Premium Checkbot
        </Link>
        :{" "}
      </div>
      <ComparisonTable comparisons={CHECKBOT_COMPARISON} />
    </div>
  );
};

export default CheckbotComparison;
