import { useContext } from "react";
import { CheckbotContext } from "./checkbotContext";

export const useCheckbot = () => {
  const context = useContext(CheckbotContext);
  if (!context) {
    throw new Error(`useCheckbot must be used in CheckbotProvider`);
  }
  const { checkbotStates, dispatch } = context;

  return {
    checkbotStates,
    dispatch,
  };
};
