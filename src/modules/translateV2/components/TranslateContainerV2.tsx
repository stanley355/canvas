import { TbLanguage } from "react-icons/tb"

const TranslateContainerV2 = () => {
  return (
    <div className="container px-0 mx-auto mt-16">
      <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbLanguage className="text-xl" />
        <span>Text</span>
      </div>
    </div>
  )
}

export default TranslateContainerV2