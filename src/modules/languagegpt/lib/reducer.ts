export const languageGPTReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE":
      const newStates = {
        ...state,
      };
      newStates[action.name] = action.value;
      return newStates;
    default:
      return state;
  }
};
