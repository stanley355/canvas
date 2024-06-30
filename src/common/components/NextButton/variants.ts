export interface INextButtonVariants {
  default: string;
  outline: string;
  disabled: string;
  none: string;
}

export const NEXT_BUTTON_VARIANTS = {
  default:
    "bg-gradient-to-b from-blue-800 to-blue-900 hover:from-blue-900 hover:to-brand-primary px-4 py-2 rounded-lg text-white flex items-center gap-1",
  outline:
    "bg-white border border-blue-800 hover:border-brand-primary px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-gradient-to-b from-white to-blue-100",
  disabled:
    "bg-blue-100 text-blue-300 cursor-not-allowed px-4 py-2 rounded-lg  flex items-center gap-1",
  none: "",
};
