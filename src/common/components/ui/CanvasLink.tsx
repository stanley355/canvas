import Link, { LinkProps } from "next/link";
import { cn } from "@/common/lib/cn";
import {
  CANVAS_BUTTON_VARIANTS,
  ICanvasButtonVariants,
} from "./CanvasUiVariant";

interface CanvasLinkProps extends LinkProps {
  variant?: keyof ICanvasButtonVariants;
  className?: string;
  children: React.ReactNode;
}

const CanvasLink = (props: CanvasLinkProps) => {
  const { variant } = props;

  return (
    <Link
      {...props}
      className={cn(
        CANVAS_BUTTON_VARIANTS[variant ? variant : "default"],
        props.className,
      )}
    >
      {props.children}
    </Link>
  );
};

export default CanvasLink;
