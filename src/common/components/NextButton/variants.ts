export interface INextButtonVariants {
  default: string;
  outline: string;
  none: string;
}

export const NEXT_BUTTON_VARIANTS = {
  default:
    "bg-gradient-to-b from-blue-800 to-blue-900 hover:from-blue-900 hover:to-brand-primary px-4 py-2 rounded-lg text-white flex items-center gap-1",
  outline:
    "bg-white text-blue-800 border border-blue-800 hover:text-brand-primary hover:border-brand-primary px-4 py-2 rounded-lg flex items-center gap-1",
  none: "",
};
