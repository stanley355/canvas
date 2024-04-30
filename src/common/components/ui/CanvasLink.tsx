import Link, { LinkProps } from "next/link";
import { cn } from "@/common/lib/cn";
import { CANVAS_BUTTON_VARIANTS, ICanvasButtonVariants } from "./CanvasUiVariant";

interface CanvasLinkProps extends LinkProps {
  variant?: keyof ICanvasButtonVariants;
  classNames?: string;
  children: React.ReactNode
}

const CanvasLink = (props: CanvasLinkProps) => {
  const { variant } = props;

  return <Link
    className={
      cn(CANVAS_BUTTON_VARIANTS[variant ? variant : "default"],
        props.classNames)
    }
    {...props}>
    {props.children}
  </Link>

}

export default CanvasLink;