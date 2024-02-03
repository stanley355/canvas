import { FaRobot } from "react-icons/fa6"

const DocumentMobile = () => {
  return (
    <div className="my-[20%] mx-auto border border-black flex flex-col items-center justify-center gap-4">
      <FaRobot className="text-5xl text-blue-900" />
      <div className="text-3xl">Oh No</div>
      <div className="text-center">Language AI Document hanya tersedia untuk perangkat komputer/laptop</div>
      <button type="button" className="bg-blue-900 p-2 text-white rounded-md">Kembali</button>
    </div>
  )
}

export default DocumentMobile