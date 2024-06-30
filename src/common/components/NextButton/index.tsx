import { cn } from "@/common/lib/cn";
import { NEXT_BUTTON_VARIANTS, INextButtonVariants } from "./variants";

interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  key?: string;
  variant?: keyof INextButtonVariants;
}

const NextButton = (props: NextButtonProps) => {
  const { variant, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(
        NEXT_BUTTON_VARIANTS[variant ? variant : "default"],
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

export default NextButton;
