import { useRouter } from "next/router";
import { MdAutoAwesome } from "react-icons/md";
import { TbCircleCheck } from "react-icons/tb";

import { Button } from "@/common/components/ui/button";
import { cn } from "@/common/lib/cn";
import { IPlanListFeature, STUDENT_PLAN_FEATURES } from "../lib/constant";

const PlanStudentsBenefits = () => {
  const router = useRouter();

  return (
    <div className="my-8 border rounded-md border-emerald-800 lg:w-1/4 lg:mx-auto">
      <div className="flex items-center justify-center gap-1 py-1 text-center text-white bg-green-800 rounded-t-md">
        <span>Most Popular</span>
        <MdAutoAwesome />
      </div>
      <div className="p-4">
        <div className="mb-2 text-3xl font-bold">Students</div>
        <div className="mb-2">
          AI writing partner that makes it easy to raise your grades and
          feedback your writing
        </div>
        <div className="text-3xl font-bold">Full 1 Year Free</div>
        <div>then 50% off</div>

        <Button
          className="w-full py-6 my-4 bg-emerald-800 hover:bg-emerald-700"
          onClick={() => router.push("/account/students/")}
        >
          Apply Student Plan
        </Button>

        <div>
          {STUDENT_PLAN_FEATURES.map(
            (feature: IPlanListFeature, index: number) => (
              <div
                key={`${feature.name}${index}`}
                className={cn(
                  "flex items-center justify-between text-lg mb-4",
                  feature.isBold ? "font-bold" : ""
                )}
              >
                <div className="flex items-center gap-4">
                  <TbCircleCheck />
                  <span>{feature.name}</span>
                </div>
                <span>{feature.limit}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanStudentsBenefits;
