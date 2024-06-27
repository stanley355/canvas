export interface INextInputVariants {
  default: string;
  disabled: string;
  none: string;
}

export const NEXT_INPUT_VARIANTS: INextInputVariants = {
  default:
    "bg-white border border-blue-600 hover:border-blue-800 focus:outline-none focus:border-blue-800  px-4 py-2 rounded-lg w-full",
  disabled:
    "bg-white border border-blue-100 text-blue-100  px-4 py-2 rounded-lg w-full focus:outline-none",
  none: "",
};
