export interface ICanvasButtonVariants {
  default: string;
  primary: string;
  "primary-reverse": string;
  ghost: string;
  none: string;
}

export const CANVAS_BUTTON_VARIANTS: ICanvasButtonVariants = {
  default:
    "flex items-center justify-center gap-1 text-sm p-2 text-white bg-black border rounded-md hover:text-black hover:bg-white hover:border-black",
  primary:
    "flex items-center justify-center gap-1 text-sm p-2 text-white bg-emerald-800 rounded-md hover:bg-emerald-600",
  "primary-reverse":
    "flex items-center justify-center gap-1 text-sm p-2 text-white rounded-md bg-white text-emerald-800 ",
  ghost: "flex items-center justify-center gap-1 p-2 text-sm",
  none: "",
};
