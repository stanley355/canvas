export interface INextButtonVariants {
  default: string;
  outline: string;
  disabled: string;
  "disabled-outline": string;
  none: string;
}

export const NEXT_BUTTON_VARIANTS = {
  default:
    "bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 py-2 rounded-lg text-white flex items-center",
  outline:
    "bg-white text-blue-400 border border-blue-400 hover:text-blue-500 hover:border-blue-500  px-4 py-2 rounded-lg flex items-center",
  disabled: "bg-blue-100 text-blue-400 px-4 py-2 rounded-lg flex items-center",
  "disabled-outline":
    "bg-white border border-blue-100 text-blue-100  px-4 py-2 rounded-lg flex items-center",
  none: "",
};
