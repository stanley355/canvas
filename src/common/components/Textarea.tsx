import React, {memo} from "react"
import { cn } from "../lib/cn"

type TTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>(
  ({ className, ...props }: TTextareaProps, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-40 w-full rounded-md border px-4 py-2 bg-transparent text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className)}
        {...props}
      />
    )
  })

export default memo(Textarea)