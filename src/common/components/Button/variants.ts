import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2",
  {
    variants: {
      variant: {
        default: "bg-brand-primary hover:bg-blue-800 text-white",
        secondary: "bg-blue-700 hover:bg-blue-600 text-white",
        danger: "bg-red-600 hover:bg-red-500 text-white",
        outline: "bg-white hover:bg-slate-200 border",
        ghost: "bg-white hover:bg-slate-200",
        link: "text-primary underline-offset-4 hover:underline",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)