export const documentEditorReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET":
      const newStates = structuredClone(state);
      newStates[action.name] = action.value;
      return newStates;
    default:
      return state;
  }
};
