import { useReducer } from "react";
import { documentEditorReducer } from "../lib/documentEditorReducer";
import { DocumentEditorContext } from "../lib/documentEditorContext";
import { DOCUMENT_EDITOR_STATES } from "../lib/documentEditorStates";

const DocumentEditorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [documentEditorStates, dispatch] = useReducer(
    documentEditorReducer,
    DOCUMENT_EDITOR_STATES
  );
  return (
    <DocumentEditorContext.Provider value={{ documentEditorStates, dispatch }}>
      {children}
    </DocumentEditorContext.Provider>
  );
};

export default DocumentEditorProvider;
