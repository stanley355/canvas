import { cn } from "@/common/lib/cn";
import { NEXT_BUTTON_VARIANTS, INextButtonVariants } from "./constant";

interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof INextButtonVariants;
}

const NextButton = (props: NextButtonProps) => {
  const { variant, ...rest } = props;

  return (
    <button
      {...rest} //put on top so the bottom props can override
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
