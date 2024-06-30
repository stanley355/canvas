import { MdAutoAwesome } from "react-icons/md"
import { PLAN_LIST } from "../../lib/constant"
import NextLink from "@/common/components/NextLink"

const PlanHomeListPremium = () => {
  return (
    <div className='border-brand-primary border rounded-lg mb-8'>
      <div className="flex items-center justify-center bg-brand-primary text-white rounded-t-lg py-2 text-xl gap-1">
        <div>Most Popular</div>
        <MdAutoAwesome />
      </div>
      <div className="p-4">
        <div className="text-3xl font-bold">{PLAN_LIST.premium.title}</div>
        <div className="mb-8">{PLAN_LIST.premium.desc}</div>
        <div className="text-3xl font-semibold">{PLAN_LIST.premium.price}</div>
        <div className="mb-4">{PLAN_LIST.premium.priceDesc}</div>

        <NextLink href="/plans/premium/" className="text-lg justify-center py-4 mb-8">{PLAN_LIST.premium.ctaText}</NextLink>

        {PLAN_LIST.premium.features.map((feat)=> <div className="grid grid-cols-2 mb-4">
          <span className="font-semibold">{feat.label}</span>
          <span className="text-right">{feat.value}</span>
        </div> )}
      </div>
    </div>
  )
}

export default PlanHomeListPremium