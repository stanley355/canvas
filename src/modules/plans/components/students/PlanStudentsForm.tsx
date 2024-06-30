import { TbProgress, TbChevronCompactRight, TbChevronRight } from "react-icons/tb"
import NextButton from "@/common/components/NextButton"

const PlanStudentsForm = () => {
  return (
    <div className="px-4">
      <NextButton className="flex-col items-start w-full p-4 rounded-b-none " variant="outline">
        <div className="p-2 mb-2 text-sm rounded-md bg-yellow-300">
          Most Popular
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="text-lg font-semibold">Half yearly</div>
          <div className="flex items-center gap-2 text-lg">
            <span className="font-semibold">Rp 70.000</span>
                <TbChevronRight className="rounded-full bg-brand-primary text-white" />
            {/* {loadingBtn === TopupPremiumDuration.HalfYearly ? (
                <TbProgress className="text-emerald-700 animate-spin" />
              ) : (
                <TbChevronCompactRight className="text-white rounded-full bg-emerald-700" />
              )} */}
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div>6 Months</div>
          <div className="p-1 bg-brand-primary text-white">Save 64%</div>
        </div>
      </NextButton>
      <NextButton className="flex-col items-start w-full p-4 rounded-none " variant="outline">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="text-lg font-semibold">Quarterly</div>
          <div className="flex items-center gap-2 text-lg">
            <span className="font-semibold">Rp 30.000</span>
                <TbChevronRight className="rounded-full bg-brand-primary text-white" />
            {/* {loadingBtn === TopupPremiumDuration.HalfYearly ? (
                <TbProgress className="text-emerald-700 animate-spin" />
              ) : (
                <TbChevronCompactRight className="text-white rounded-full bg-emerald-700" />
              )} */}
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div>3 Months</div>
          <div className="p-1 bg-brand-primary text-white">Save 68%</div>
        </div>
      </NextButton>
      <NextButton className="flex-col items-start w-full p-4 rounded-t-none " variant="outline">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="text-lg font-semibold">Monthly</div>
          <div className="flex items-center gap-2 text-lg">
            <span className="font-semibold">Rp 12.500</span>
                <TbChevronRight className="rounded-full bg-brand-primary text-white" />
            {/* {loadingBtn === TopupPremiumDuration.HalfYearly ? (
                <TbProgress className="text-emerald-700 animate-spin" />
              ) : (
                <TbChevronCompactRight className="text-white rounded-full bg-emerald-700" />
              )} */}
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div>1 Month</div>
          <div className="p-1 bg-brand-primary text-white">Save 50%</div>
        </div>
      </NextButton>
    </div>
  )
}

export default PlanStudentsForm