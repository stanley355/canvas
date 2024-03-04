import { useContext } from "react";
import { TranslateContextV2 } from "./translateContextV2";

export const useTranslateV2 = () => {
  const context = useContext(TranslateContextV2); 
  return context;
};
