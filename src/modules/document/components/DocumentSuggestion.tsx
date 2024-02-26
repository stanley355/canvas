import { IDocument } from "@/common/lib/api/documents/documentInterface";
import { IUser } from "@/common/lib/api/users/userInterfaces";
import DocumentSuggestionHeader from "./DocumentSuggestionHeader";
import { useDocumentEditor } from "../lib/useDocumentEditor";
import classNames from "classnames";
import { useMemo } from "react";
import { FaSpinner } from "react-icons/fa6";

interface IDocumentSuggestion {
  user: IUser;
  document: IDocument;
}

const DocumentSuggestion = (props: IDocumentSuggestion) => {
  const { user, document } = props;
  const { documentEditorStates } = useDocumentEditor();
  const { isLoading } = documentEditorStates;

  const suggestionValue = useMemo(() => {
    if (documentEditorStates.suggestionText)
      return documentEditorStates.suggestionText;
    if (document.checkbot_completion) return document.checkbot_completion;
    return "";
  }, [documentEditorStates.suggestionText, document.checkbot_completion]);

  return (
    <div className="w-1/2 h-[89vh] relative">
      {isLoading && (
        <div className="absolute bg-[rgba(0,0,0,0.5)] top-1 left-0 z-10 w-full h-[94vh] flex items-center justify-center">
          <FaSpinner className="text-white text-5xl animate-spin" />
        </div>
      )}
      <DocumentSuggestionHeader user={user} document={document} />
      <textarea
        disabled
        name="document_suggestion"
        id="document_suggestion_textarea"
        onChange={() => {}}
        placeholder="Pilih instruksi untuk memulai"
        value={suggestionValue}
        className={classNames(
          "p-2 w-full h-full text-sm",
          suggestionValue ? "text-gray-700" : "text-gray-400"
        )}
      />
    </div>
  );
};

export default DocumentSuggestion;
