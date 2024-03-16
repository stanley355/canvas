
import { useRouter } from "next/router";
import { TbCheck } from "react-icons/tb";
import { Button } from "@/common/components/ui/button";
import {
  ACCOUNT_SUBSCRIPTION_DETAIL_PLAN,
  IAccountSubscriptionDetailPlanConstant,
  IAccountSubscriptionDetailPlanFeatureConstant,
} from "../lib/constant";
import { cn } from "@/common/lib/cn";

const AccountPlanList = () => {
  const router = useRouter();

  return (
    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
      {ACCOUNT_SUBSCRIPTION_DETAIL_PLAN.map(
        (plan: IAccountSubscriptionDetailPlanConstant, index: number) => (
          <div
            className={cn("mb-8", index === 0 ? "lg:hidden" : "")}
            key={plan.planTitle}
          >
            <div className="text-gray-500">{plan.planUsage}</div>
            <div className="text-xl font-bold">{plan.planTitle}</div>
            <div>{plan.planDescription}</div>
            <Button
              disabled={plan.planTitle === "Free"}
              onClick={() => router.push(plan.planHref)}
              className="w-full p-2 my-4 text-center text-white bg-emerald-800 hover:bg-emerald-700"
            >
              {plan.planCta}
            </Button>

            <div>
              {plan.planFeatures.map(
                (feature: IAccountSubscriptionDetailPlanFeatureConstant) => (
                  <div
                    className={cn(
                      "flex items-center justify-between mb-4",
                      feature.isBold ? "font-bold" : ""
                    )}
                    key={feature.name}
                  >
                    <div className="flex items-center gap-2">
                      <TbCheck className="text-emerald-500" />
                      <span>{feature.name}</span>
                    </div>
                    <div>{feature.limit}</div>
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AccountPlanList;