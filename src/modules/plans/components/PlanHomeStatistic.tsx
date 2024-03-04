import { TbUser, TbLanguage, TbBrandGrammarly } from "react-icons/tb"

const PlanHomeStatistic = () => {
  return (
    <div className="lg:w-3/4 lg:mx-auto">
      <div className="mb-4 text-center text-gray-500">Trusted with more than</div>
      <div className="flex items-center justify-around gap-4 lg:justify-center ">
        <div className="flex items-center gap-2"><TbUser className="text-2xl" /> <span>1600 users</span> </div>
        <div className="flex items-center gap-2"><TbLanguage className="text-2xl" /> <span>4500 translation</span> </div>
        <div className="flex items-center gap-2"><TbBrandGrammarly className="text-2xl" /> <span>21000 grammar fix</span> </div>
      </div>
    </div>
  )
}

export default PlanHomeStatistic