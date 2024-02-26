import { useState, ChangeEvent, useRef } from "react";
import { FaPen } from "react-icons/fa6";

import { IDocument } from "@/common/lib/api/documents/documentInterface";
import { IUser } from "@/common/lib/api/users/userInterfaces";
import { useDocumentEditor } from "../lib/useDocumentEditor";
import { fetchUpdateDocument } from "@/common/lib/api/documents/fetchUpdateDocument";

interface IDocumentTItle {
  user: IUser;
  document: IDocument;
}

const DocumentTitle = (props: IDocumentTItle) => {
  const { user, document } = props;
  const { documentEditorStates } = useDocumentEditor();
  const { editorText, suggestionText } = documentEditorStates;

  const timeout = useRef<any>(null);
  const [titleValue, setTitleValue] = useState(document.name);
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = async (newTitle: string) => {
    clearTimeout(timeout.current);
    const updatePayload = {
      id: document.id,
      user_id: user.id,
      name: newTitle ? newTitle : "Dokumen Tanpa Judul",
      content: editorText,
      checkbot_completion: suggestionText,
    };

    timeout.current = setTimeout(
      async () => await fetchUpdateDocument(updatePayload),
      2000
    );

    return;
  };

  return (
    <div className="w-1/2">
      {isEdit ? (
        <input
          type="text"
          className="p-2 w-full font-semibold rounded-md"
          autoFocus
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleUpdate(e.target.value)
          }
        />
      ) : (
        <button
          type="button"
          className="flex items-center gap-1 p-2 font-semibold  w-full"
          onClick={() => setIsEdit(true)}
        >
          <FaPen className="text-xl" />
          <div className="truncate">{document.name}</div>
        </button>
      )}
    </div>
  );
};

export default DocumentTitle;
