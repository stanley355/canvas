import { forwardRef, memo } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/common/lib/cn";
import { buttonVariants } from "./variants";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  key?: string;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant, className, children, ...props }: IButtonProps, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default memo(Button);
