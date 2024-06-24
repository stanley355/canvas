export interface INextButtonVariants {
  default: string;
  outline: string;
  disabled: string;
  "disabled-outline": string;
  none: string;
}

export const NEXT_BUTTON_VARIANTS = {
  default:
    "bg-gradient-to-b from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2 rounded-lg text-white",
  outline:
    "bg-white text-blue-500 border border-blue-500 hover:text-blue-700 hover:border-blue-700  px-4 py-2 rounded-lg",
  disabled: "bg-blue-100 text-blue-400 px-4 py-2 rounded-lg",
  "disabled-outline":
    "bg-white border border-blue-100 text-blue-100  px-4 py-2 rounded-lg",
  none: "",
};
