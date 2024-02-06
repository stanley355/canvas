import Link from "next/link";
import { useRouter } from "next/router";
import { FaPlus, FaRegFile, FaRegFileWord, FaTrash } from "react-icons/fa6"
import { toast } from "react-toastify";

import { fetchCreateDocument } from "@/common/lib/api/documents/fetchCreateDocument";
import { IDocument } from "@/common/lib/api/documents/documentInterface";
import { IUser } from "@/common/lib/api/users/userInterfaces";
import { fetchDeleteDocument } from "@/common/lib/api/documents/fetchDeleteDocument";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

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

    sendFirebaseEvent('document_create');
    router.push(`/document/${newDocRes.id}`);
    return;
  }

  const handleDeletDocument = async (documentID: string) => {
    const newDocRes: IDocument = await fetchDeleteDocument(user.id, documentID);
    if (!newDocRes.id) {
      toast.error("Gagal Menghapus Dokumen, silakan coba lagi");
      return;
    }

    sendFirebaseEvent('document_delete');
    router.reload();
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
        <div className="shadow-lg border border-gray-100 rounded-md cursor-pointer relative h-36" key={doc.id}>
          <button
            type="button"
            onClick={async () => await handleDeletDocument(doc.id)}
            className="text-red-500 border-l border-b border-red-300 absolute p-1 top-0 right-0 z-10 hover:text-white hover:bg-red-500">
            <FaTrash />
          </button>
          <Link
            href={`/document/${doc.id}`}
            className="hover:font-bold">
            <FaRegFileWord className="text-4xl text-blue-900 h-3/5 mx-auto" />
            <div className="h-2/5 pl-2 text-ellipsis overflow-hidden ">{doc.name}</div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default DocumentList