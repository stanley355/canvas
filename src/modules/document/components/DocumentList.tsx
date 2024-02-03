import { FaPlus } from "react-icons/fa6"
import { fetchCreateDocument } from "@/common/lib/api/documents/fetchCreateDocument";
import { toast } from "react-toastify";
import { IDocument } from "@/common/lib/api/documents/documentInterface";
import { IUser } from "@/common/lib/api/users/userInterfaces";
import { useRouter } from "next/router";

interface IDocumentList {
  user: IUser
}

const DocumentList = (props: IDocumentList) => {
  const { user } = props;
  const router = useRouter();

  const handleCreateDocument = async () => {
    const newDocRes: IDocument = await fetchCreateDocument(user.id);
    if (!newDocRes.id) {
      toast.error("Gagal Membuat Dokumen, silakan coba lagi");
      return;
    }

    router.push(`/document/${newDocRes.id}`);
    return;
  }

  return (
    <div className="w-4/5 mx-auto mt-8">
      <button type="button"
        onClick={handleCreateDocument}
        className="shadow-lg border border-gray-100 rounded-md flex flex-col items-center justify-center p-8 pb-4 hover:font-bold cursor-pointer">
        <FaPlus className="text-4xl text-blue-900" />
        <div className="mt-4 text-xl">New</div>
      </button>
    </div>
  )
}

export default DocumentList