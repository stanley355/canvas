import { forwardRef, memo } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/common/lib/cn";
import { buttonVariants } from "./variants";

interface TButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  key?: string;
}

const Button = forwardRef<HTMLButtonElement, TButtonProps>( ({ variant, className, children, ...rest }: TButtonProps, ref) => {

  return (
    <button
      {...rest}
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
    >
      {children}
    </button>
  );
});

export default memo(Button);
