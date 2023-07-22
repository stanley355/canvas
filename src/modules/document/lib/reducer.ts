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
    default:
      return state;
  }
};
