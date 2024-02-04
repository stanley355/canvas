import { createContext } from "react";
import { DOCUMENT_EDITOR_STATES } from "./documentEditorStates";
import { IDocumentEditorStates } from "./documentEditorStates";

export interface IDocumentEditorDispatch{
  type: string;
  name: keyof IDocumentEditorStates;
  value: any;
}

export const DocumentEditorContext = createContext({
  documentEditorStates: DOCUMENT_EDITOR_STATES,
  dispatch: (dispatchPayload: IDocumentEditorStates) => {},
});
