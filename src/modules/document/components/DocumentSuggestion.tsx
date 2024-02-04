import { IDocument } from "@/common/lib/api/documents/documentInterface"
import { IUser } from "@/common/lib/api/users/userInterfaces"
import DocumentSuggestionHeader from "./DocumentSuggestionHeader"
import { useDocumentEditor } from "../lib/useDocumentEditor"
import classNames from "classnames"
import { useMemo } from "react"

interface IDocumentSuggestion {
  user: IUser,
  document: IDocument
}


const DocumentSuggestion = (props: IDocumentSuggestion) => {
  const { user, document } = props;
  const { documentEditorStates } = useDocumentEditor();

  const suggestionValue = useMemo(()=> {
    if (documentEditorStates.suggestionText) return documentEditorStates.suggestionText;
    if (document.checkbot_completion) return document.checkbot_completion;
    return ""
  }, [documentEditorStates.suggestionText])

  return (
    <div className="w-1/2 h-[89vh]">
      <DocumentSuggestionHeader user={user} document={document} />
      <textarea
        disabled
        name="document_suggestion"
        id="document_suggestion_textarea"
        onChange={() => { }}
        placeholder="Pilih instruksi untuk memulai"
        value={suggestionValue}
        className={classNames("p-2 w-full h-full", suggestionValue ? "text-gray-700" : "text-gray-400")}
      />

    </div>
  )
}

export default DocumentSuggestion

