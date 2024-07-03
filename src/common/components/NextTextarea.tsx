import { cn } from "../lib/cn";
import { NEXT_INPUT_VARIANTS, INextInputVariants } from "./NextInput/variants"

export interface NextTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variants?: keyof INextInputVariants
}

const NextTextarea = (props: NextTextareaProps) => {
  const { variants, ...rest } = props;

  return (
    <textarea
      {...rest}
      className={cn(
        NEXT_INPUT_VARIANTS[variants ? variants : "default"],
        props.className
      )}
    />
  )
}

export default NextTextarea