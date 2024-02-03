import { FaFileExcel, FaFilePowerpoint, FaFileWord, FaRegEnvelope, FaRegFilePdf } from "react-icons/fa6"

const DocumentBanner = () => {
  return (
    <div className="flex items-center p-4 border-l-4 border-blue-900 w-4/5 mx-auto shadow-lg gap-8">
      <div className="leading-8">
        <div className="text-md font-bold">All-in-one Writing Assistant for ALL Languages</div>
        <div className="text-sm">Terjemahkan dan Periksa dokumenmu dengan Language AI</div>
      </div>
      <div className="flex items-center gap-8 text-3xl">
        <FaFileWord className="text-blue-500" />
        <FaRegEnvelope />
        <FaFilePowerpoint className="text-red-500"/>
        <FaRegFilePdf />
        <FaFileExcel className="text-green-500" />
      </div>
      <button type="button" className="bg-blue-900 text-white p-2 rounded-md ml-16 text-sm">
        Buat Dokumen
      </button>
    </div>
  )
}

export default DocumentBanner