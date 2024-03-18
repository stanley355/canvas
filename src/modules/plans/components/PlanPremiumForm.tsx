import { Button } from "@/common/components/ui/button"
import { TbChevronCompactRight } from "react-icons/tb"

const PlanPremiumForm = () => {
  return (
    <div className='mb-8'>
      <div className='mb-2 text-sm text-gray-500'>Premium Options</div>

      <div className="shadow-lg">
        <Button variant={'ghost'} className="flex-col items-start w-full p-4 border-2 rounded-b-none border-emerald-700 h-fit rounded-t-md">
          <div className="p-1 mb-2 text-sm text-white rounded-md bg-emerald-700">Most Popular</div>
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-semibold">Half yearly</div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">Rp 150.000</span>
              <TbChevronCompactRight className="text-white rounded-full bg-emerald-700" />
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <div>6 Months</div>
            <div></div>
          </div>
        </Button>
        <Button variant={'ghost'} className="flex-col w-full p-4 rounded-none border-y-2 h-fit">
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-semibold">Quarterly</div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">Rp 70.000</span>
              <TbChevronCompactRight className="text-white rounded-full bg-emerald-700" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full text-gray-500">
            <div>3 Months</div>
            <div className="p-1 bg-emerald-100 text-emerald-700">Save 7%</div>
          </div>
        </Button>
        <Button variant={'ghost'} className="flex-col w-full p-4 border rounded-t-none h-fit">
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-semibold">Monthly</div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">Rp 25.000</span>
              <TbChevronCompactRight className="text-white rounded-full bg-emerald-700" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full text-gray-500">
            <div>1 Month</div>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default PlanPremiumForm