import React from "react"
import { cn } from "../lib/cn"

type TInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ className, ...props }: TInputProps, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border px-4 py-2 bg-transparent text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className)}
        {...props}
      />
    )
  })

export default Input