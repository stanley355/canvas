import { cn } from "@/common/lib/cn";
import { BUTTON_VARIANTS, TButtonVariants } from "./variants";

interface TButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  key?: string;
  variant?: keyof TButtonVariants;
}

const Button = ({ variant, className, children, ...rest }: TButtonProps) => {

  return (
    <button
      {...rest}
      className={cn(
        BUTTON_VARIANTS[variant ? variant : "default"],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
