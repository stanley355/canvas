
export interface ICanvasButtonVariants {
  default: string;
  ghost: string
}

export const CANVAS_BUTTON_VARIANTS: ICanvasButtonVariants = {
  default: "flex items-center gap-1 p-2 text-sm p-2 text-white bg-black border rounded-md hover:text-black hover:bg-white hover:border-black",
  ghost: "flex items-center gap-1 p-2 text-sm",
}