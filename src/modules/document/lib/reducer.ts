import { toast } from "react-toastify";

export const docTranslateReducer = (state: any, action: any) => {
  const newStates = structuredClone(state);
  switch (action.type) {
    case "UPDATE":
      newStates[action.name] = action.value;
      return newStates;
    case "ADD_ROW":
      const defaultPrompt = {
        id: 0,
        document_id: action.doc_id,
        prompt_text: "Click Edit to change",
        completion_text: "Click Edit to change",
      };
      newStates["prompts"].splice(action.index, 0, defaultPrompt);
      return newStates;
    case "DELETE_ROW":
      console.log(action.index)
      if (newStates.prompts.length > 1) {
        newStates["prompts"].splice(action.index, 1);
        return newStates;
      }
      toast.error("A document should have at least 1 row!");
    case "EDIT_ROW":
      newStates.targetRowIndex = action.index + 1;
      newStates.targetRowPrompt = action.prompt;
      return newStates;
    default:
      return state;
  }
};
