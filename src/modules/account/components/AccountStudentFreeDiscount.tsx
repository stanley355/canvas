import Link from "next/link"
import { TbCircleCheck, TbArrowBadgeLeft } from "react-icons/tb"
import { cn } from "@/common/lib/cn"
import { STUDENT_PLAN_FEATURES, IPlanListFeature } from "@/modules/plans/lib/constant"

const AccountStudentFreeDiscount = () => {
  return (
    <div className="lg:container lg:mx-auto">

      <div className="px-4 pb-4 mt-16 lg:mt-4 lg:w-1/3">
        <div className="mb-4 text-2xl font-bold border-b">Your Student Plan</div>

        <div className="mb-2 text-xl font-bold">Free Period</div>
        <div className="mb-8">Enjoy unlimited access to LanguageAi, feedback your writing, and raise your grades!</div>

        <div className="pb-2 mb-2 border-b">What can you do with Student Plan?</div>

        <div>
          {STUDENT_PLAN_FEATURES.map((feature: IPlanListFeature, index: number) => (
            <div
              key={`${feature.name}${index}`}
              className={cn(
                "flex items-center justify-between mb-4",
                feature.isBold ? "font-bold" : ""
              )}
            >
              <div className="flex items-center gap-2">
                <TbCircleCheck className="font-bold text-emerald-800" />
                <span>{feature.name}</span>
              </div>
              <span>{feature.limit}</span>
            </div>
          ))}
        </div>

        <Link href="/account" className="flex items-center p-2 text-white rounded-md bg-emerald-800 hover:bg-emerald-700 w-fit">
          <TbArrowBadgeLeft className="text-xl" />
          <span>Go back to Account</span>

        </Link>
      </div>
    </div>
  )
}

export default AccountStudentFreeDiscount