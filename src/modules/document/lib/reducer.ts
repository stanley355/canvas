export const docTranslateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE":
      const newStates = structuredClone(state);
      newStates[action.name] = action.value;
      return newStates;
    default:
      return state;
  }
};
