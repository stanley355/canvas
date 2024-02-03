import ReactSelect from "react-select"
import { IDocument } from "@/common/lib/api/documents/documentInterface"
import { IUser } from "@/common/lib/api/users/userInterfaces"
import DocumentSuggestionHeader from "./DocumentSuggestionHeader"

interface IDocumentSuggestion {
  user: IUser,
  document: IDocument
}


const DocumentSuggestion = (props: IDocumentSuggestion) => {
  const { user, document } = props;
  return (
    <div>
      <DocumentSuggestionHeader user={user} document={document} />
      <div className="p-2 text-gray-400">
        Pilih Instruksi untuk memulai...
      </div>
    </div>
  )
}

export default DocumentSuggestion

