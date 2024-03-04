import { useRouter } from "next/router"
import { TbCircleCheck } from "react-icons/tb";
import { MdAutoAwesome } from "react-icons/md";
import { Button } from "@/common/components/ui/button"
import { IPlanList, IPlanListFeature, PLAN_LIST_V2 } from "../lib/constant"
import { cn } from "@/common/lib/cn";


const PlanHomePlanList = () => {
  const router = useRouter();


  return (
    <div className="flex flex-col my-8 lg:grid lg:grid-cols-3 lg:w-4/5 lg:mx-auto">
      {PLAN_LIST_V2.map((plan: IPlanList) =>
        <div key={plan.title} className={cn(
          "mb-8 border rounded-md ",
          {
            'order-3 lg:order-none ': plan.title === "Free",
            'border-emerald-800': plan.title === "Premium",
            'mt-8': plan.title !== "Premium"
          })}>
          {plan.title === "Premium" &&
            <div className="flex items-center justify-center gap-1 py-1 text-center text-white bg-green-800 rounded-t-md">
              <span>Most Popular</span>
              <MdAutoAwesome />
            </div>}
          <div className="p-4">
            <div className="mb-2 text-3xl font-bold">{plan.title}</div>
            <div className="mb-2">{plan.description}</div>
            <div className="text-3xl font-bold">Rp{plan.price}</div>
            <div>{plan.priceDescription}</div>

            <Button disabled={plan.title === "Free"} className="w-full py-6 my-4 bg-emerald-800 hover:bg-emerald-700" onClick={() => router.push(plan.ctaLink)}>{plan.ctaText}</Button>

            <div>
              {plan.features.map((feature: IPlanListFeature, index: number) =>
                <div key={`${feature.name}${index}`} className={cn("flex items-center justify-between text-lg mb-4", feature.isBold ? "font-bold" : "")}>
                  <div className="flex items-center gap-4">
                    <TbCircleCheck />
                    <span>{feature.name}</span>
                  </div>
                  <span>{feature.limit}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlanHomePlanList