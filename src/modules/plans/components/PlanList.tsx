import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { PLAN_LIST } from "../lib/constant";

const PlanList = () => (
  <div>
    <h1 className="text-3xl lg:text-5xl mb-4">Pricing for All Stages</h1>
    <h2 className="lg:text-lg mb-4">
      All plans include access to AI Translate and AI Checkbot.
    </h2>
    <div className="lg:grid lg:grid-cols-4 lg:gap-4">
      {PLAN_LIST.map((plan: any, index: number) => (
        <div
          key={plan.title}
          className={classNames(
            "border border-blue-900 rounded mb-4",
            index === 0 ? "bg-green-100" : "bg-white"
          )}
        >
          {index === 0 && (
            <div className="p-2 text-center bg-yellow-100 border-b border-blue-900 rounded-t font-bold text-lg">
              #PROMO
            </div>
          )}
          <div className="p-4 pb-8 rounded">
            <div className="my-4 text-center text-2xl font-bold">
              {plan.title}
            </div>
            <div className="text-center mb-4">{plan.desc}</div>
            <div className="mt-4 text-center text-xl font-bold">
              {plan.price}
            </div>
            <div className="text-center text-lg">{plan.unit}</div>
            <div className="flex flex-col items-center mt-8">
              <Link
                href={plan.url}
                className="border border-gray-500 rounded-[2rem] bg-yellow-100 text-lg font-semibold p-4"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PlanList;
