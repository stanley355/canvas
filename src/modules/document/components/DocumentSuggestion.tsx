import { IDocument } from "@/common/lib/api/documents/documentInterface"
import { IUser } from "@/common/lib/api/users/userInterfaces"
import ReactSelect from "react-select"

interface IDocumentSuggestion {
  user: IUser,
  document: IDocument
}


const DocumentSuggestion = (props: IDocumentSuggestion) => {
  const {user, document} = props;
  return (
    <div>
      <div className="flex p-2 pb-0 items-center justify-between">
        <div>{document.name}</div>
        <ReactSelect options={[{ label: "hi", value: "woi" }]} placeholder="Pilih Instruksi" className="w-1/2" />
      </div>
      <div className="p-2 text-gray-400">
        Pilih Instruksi untuk memulai...
      </div>
    </div>
  )
}

export default DocumentSuggestion

