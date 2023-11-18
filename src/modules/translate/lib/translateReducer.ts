export const translateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET":
      const newStates = structuredClone(state);
      newStates[action.name] = action.value;
      return newStates;
    default:
      return state;
  }
};
