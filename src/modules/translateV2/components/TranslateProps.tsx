import { TbClockPlay, TbPlus } from "react-icons/tb"

const TranslateProps = () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-8">
      <div className="flex flex-col items-center">
        <div className="p-2 text-3xl border border-black rounded-full">

          <TbClockPlay />
        </div>
        <span>History</span>
      </div>


      <div className="flex flex-col items-center">
        <div className="p-2 text-3xl border border-black rounded-full">
          <TbPlus />
        </div>
        <span>Contribute</span>
      </div>
    </div>
  )
}

export default TranslateProps