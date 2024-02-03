import { FaMagnifyingGlass } from "react-icons/fa6"

const DocumentSearchBox = () => {
  return (
    <div className="w-4/5 mx-auto rounded-md mt-8 flex items-center shadow-lg border border-gray-300 focus:outline-none">
      <input type="text" placeholder="Cari Dokumen" className="w-[97.5%] p-1 rounded-md" />
      <FaMagnifyingGlass />
    </div>
  )
}

export default DocumentSearchBox