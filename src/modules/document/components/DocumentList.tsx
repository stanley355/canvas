import Link from "next/link";
import { useRouter } from "next/router";
import { FaPlus, FaRegFile } from "react-icons/fa6"
import { toast } from "react-toastify";

import { fetchCreateDocument } from "@/common/lib/api/documents/fetchCreateDocument";
import { IDocument } from "@/common/lib/api/documents/documentInterface";
import { IUser } from "@/common/lib/api/users/userInterfaces";

interface IDocumentList {
  user: IUser,
  userDocuments: IDocument[];
}

const DocumentList = (props: IDocumentList) => {
  const { user, userDocuments } = props;
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
    <div className="w-4/5 mx-auto mt-8 grid grid-cols-8 gap-4">
      <button type="button"
        onClick={handleCreateDocument}
        className="shadow-lg border border-gray-100 rounded-md flex flex-col items-center justify-center p-8 pb-4 hover:font-bold cursor-pointer">
        <FaPlus className="text-4xl text-blue-900" />
        <div className="mt-4 text-xl">New</div>
      </button>

      {userDocuments.length > 0 && userDocuments.map((doc: IDocument) =>
        <Link href={`/document/${doc.id}`}
          className="shadow-lg border border-gray-100 rounded-md flex flex-col items-center justify-center p-8 pb-4 hover:font-bold cursor-pointer h-40">
          <FaRegFile className="text-4xl text-blue-900" />
          <div className="mt-4 text-sm">{doc.name}</div>
        </Link>
      )}
    </div>
  )
}

export default DocumentList