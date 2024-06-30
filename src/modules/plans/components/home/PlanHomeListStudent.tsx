import { PLAN_LIST } from "../../lib/constant"
import NextLink from "@/common/components/NextLink"

const PlanHomeListStudent = () => {
  return (
    <div className='border-brand-primary border rounded-lg mb-8'>
      <div className="p-4">
        <div className="text-3xl font-bold">{PLAN_LIST.student.title}</div>
        <div className="mb-8">{PLAN_LIST.student.desc}</div>
        <div className="text-3xl font-semibold">{PLAN_LIST.student.price}</div>
        <div className="mb-4">{PLAN_LIST.student.priceDesc}</div>

        <NextLink href="/plans/student/" className="text-2xl justify-center py-4 mb-8">{PLAN_LIST.student.ctaText}</NextLink>

        {PLAN_LIST.student.features.map((feat)=> <div className="grid grid-cols-2 mb-4">
          <span className="font-semibold">{feat.label}</span>
          <span className="text-right">{feat.value}</span>
        </div> )}
      </div>
    </div>
  )
}

export default PlanHomeListStudent