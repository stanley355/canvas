import React from "react";
import PlanHomeListPremium from "./PlanHomeListPremium";
import PlanHomeListStudent from "./PlanHomeListStudent";
import PlanHomeListFree from "./PlanHomeListFree";

const PlanHomeList = () => {
  return (
    <div className="mb-8">
      <div className="lg:hidden">
        <PlanHomeListPremium />
        <PlanHomeListStudent />
        <PlanHomeListFree />
      </div>
      <div className="hidden lg:grid lg:grid-cols-3 w-4/5 mx-auto">
        <PlanHomeListFree />
        <PlanHomeListPremium />
        <PlanHomeListStudent />
      </div>
    </div>
  );
};

export default PlanHomeList;
