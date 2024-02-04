import { useContext } from "react";
import { DocumentEditorContext } from "./documentEditorContext";

export const useDocumentEditor = () => {
  const context = useContext(DocumentEditorContext);
  if (!context) {
    throw new Error(`useDocumentEditor must be used in DocumentEditorProvider`);
  }
  const { documentEditorStates, dispatch } = context;

  return {
    documentEditorStates,
    dispatch,
  };
};
