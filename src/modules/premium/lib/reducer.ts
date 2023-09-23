export const premiumTranslateReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE":
      const newStates = structuredClone(state);
      newStates[action.name] = action.value;
      return newStates;
    default:
      return state;
  }
};

export const checkbotReducer = (state: any, action: any) => {
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
