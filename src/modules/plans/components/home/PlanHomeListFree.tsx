import { PLAN_LIST } from "../../lib/constant"
import NextButton from "@/common/components/NextButton"

const PlanHomeListFree = () => {
  return (
    <div className='border-brand-primary border rounded-lg mb-8 lg:mt-10'>
      <div className="p-4">
        <div className="text-3xl font-bold">{PLAN_LIST.free.title}</div>
        <div className="mb-8">{PLAN_LIST.free.desc}</div>
        <div className="text-3xl font-semibold">{PLAN_LIST.free.price}</div>
        <div className="mb-4">{PLAN_LIST.free.priceDesc}</div>

        <NextButton
          variant="disabled"
          disabled
          className="p-4 text-lg justify-center py-4 mb-8 w-full">{PLAN_LIST.free.ctaText}</NextButton>

        {PLAN_LIST.free.features.map((feat) => <div className="grid grid-cols-2 mb-4">
          <span className="font-semibold">{feat.label}</span>
          <span className="text-right">{feat.value}</span>
        </div>)}
      </div>
    </div>
  )
}

export default PlanHomeListFree