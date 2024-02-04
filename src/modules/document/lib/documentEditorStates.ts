export interface IDocumentEditorStates {
  editorText: string;
  suggestionText: string;
  isLoading: boolean;
}

export const DOCUMENT_EDITOR_STATES: IDocumentEditorStates = {
  editorText: "",
  suggestionText: "",
  isLoading: false,
};
