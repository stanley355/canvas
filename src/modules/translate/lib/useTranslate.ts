import { useContext } from "react";
import { TranslateContext } from "./translateContext";

export const useTranslate = () => {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error(`useTranslate must be used in TranslateProvider`);
  }
  const { translateStates, dispatch } = context;

  return {
    translateStates,
    dispatch,
  };
};
