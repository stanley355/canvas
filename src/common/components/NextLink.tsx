import Link, { LinkProps } from "next/link";
import { cn } from "@/common/lib/cn";
import {
  INextButtonVariants,
  NEXT_BUTTON_VARIANTS,
} from "./NextButton/variants";

interface NextLinkProps extends LinkProps {
  variant?: keyof INextButtonVariants;
  className?: string;
  children: React.ReactNode;
}

const NextLink = (props: NextLinkProps) => {
  const { variant, children, ...rest } = props;

  return (
    <Link
      {...rest}
      className={cn(
        NEXT_BUTTON_VARIANTS[variant ? variant : "default"],
        props.className
      )}
    >
      {children}
    </Link>
  );
};

export default NextLink;
