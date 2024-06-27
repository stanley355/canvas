import { cn } from "@/common/lib/cn";
import { NEXT_INPUT_VARIANTS, INextInputVariants } from "./variants";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variants?: keyof INextInputVariants
}


const NextInput = (props: InputProps) => {
  const { className, variants, ...rest } = props;
  return (
    <input
      {...rest}
      className={cn(NEXT_INPUT_VARIANTS[variants ? variants : "default"], props.className)}
    />
  )
}

export default NextInput