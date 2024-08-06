export type TButtonVariants = {
  default: string;
  secondary: string;
  none: string;
};

const BASE_BUTTON_CLASSNAME =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";

export const BUTTON_VARIANTS: TButtonVariants = {
  default: `${BASE_BUTTON_CLASSNAME} bg-primary hover:bg-blue-800`,
  secondary: `${BASE_BUTTON_CLASSNAME} bg-blue-600 hover:bg-blue-700`,
  none: "",
};
