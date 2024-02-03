import { FaPlus } from "react-icons/fa6"

const DocumentList = () => {
  return (
    <div className="w-4/5 mx-auto mt-8">
      <button type="button"
        className="shadow-lg border border-gray-100 rounded-md flex flex-col items-center justify-center p-8 pb-4 hover:font-bold cursor-pointer">
        <FaPlus className="text-4xl text-blue-900" />
        <div className="mt-4 text-xl">New</div>
      </button>
    </div>
  )
}

export default DocumentList