import { IDocument } from "@/common/lib/api/documents/documentInterface"
import { IUser } from "@/common/lib/api/users/userInterfaces"
import DocumentSuggestionHeader from "./DocumentSuggestionHeader"
import { useDocumentEditor } from "../lib/useDocumentEditor"
import classNames from "classnames"

interface IDocumentSuggestion {
  user: IUser,
  document: IDocument
}


const DocumentSuggestion = (props: IDocumentSuggestion) => {
  const { user, document } = props;
  const { documentEditorStates } = useDocumentEditor();

  return (
    <div className="w-1/2 h-[89vh]">
      <DocumentSuggestionHeader user={user} document={document} />
      <div className={classNames("p-2 ", documentEditorStates.suggestionText ? "text-gray-700" : "text-gray-400")}>
        {documentEditorStates.suggestionText ?
          documentEditorStates.suggestionText :
          "Pilih Instruksi untuk memulai..."
        }
      </div>
    </div>
  )
}

export default DocumentSuggestion

