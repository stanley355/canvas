import { FaRobot } from "react-icons/fa6"
import Link from "next/link"

const DocumentMobile = () => {
  return (
    <div className="mt-[10%] mx-auto flex flex-col items-center justify-center gap-4">
      <FaRobot className="text-5xl text-blue-900" />
      <div className="text-3xl">Oh No</div>
      <div className="text-center">Language AI Document hanya tersedia untuk perangkat komputer/laptop</div>
      <Link href="/" className="bg-blue-900 p-2 text-white rounded-md" >Kembali</Link>
    </div>
  )
}

export default DocumentMobile