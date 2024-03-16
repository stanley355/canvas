import { IDocument } from "@/common/lib/api/documents/documentInterface";
import { fetchCreateDocument } from "@/common/lib/api/documents/fetchCreateDocument";
import { IUser } from "@/common/lib/api/users/interfaces";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { useRouter } from "next/router";
import {
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
  FaRegEnvelope,
  FaRegFilePdf,
} from "react-icons/fa6";
import { toast } from "react-toastify";

interface IDocumentBanner {
  user: IUser;
}

const DocumentBanner = (props: IDocumentBanner) => {
  const { user } = props;
  const router = useRouter();

  const handleClick = async () => {
    const newDocRes: IDocument = await fetchCreateDocument(user.id);
    if (!newDocRes.id) {
      toast.error("Gagal Membuat Dokumen, silakan coba lagi");
      return;
    }

    sendFirebaseEvent("document_create");
    router.push(`/document/${newDocRes.id}`);
    return;
  };

  return (
    <div className="flex items-center w-4/5 gap-8 p-4 mx-auto border-l-4 border-blue-900 shadow-lg">
      <div className="leading-8">
        <div className="font-bold text-md">
          All-in-one Writing Assistant for ALL Languages
        </div>
        <div className="text-sm">
          Terjemahkan dan Periksa dokumenmu dengan Language AI
        </div>
      </div>
      <div className="flex items-center gap-8 text-3xl">
        <FaFileWord className="text-blue-500" />
        <FaRegEnvelope />
        <FaFilePowerpoint className="text-red-500" />
        <FaRegFilePdf />
        <FaFileExcel className="text-green-500" />
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="p-2 ml-16 text-sm text-white bg-blue-900 rounded-md"
      >
        Buat Dokumen
      </button>
    </div>
  );
};

export default DocumentBanner;
