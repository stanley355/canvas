import { cn } from "@/common/lib/cn";
import { CANVAS_BUTTON_VARIANTS, ICanvasButtonVariants } from "./CanvasUiVariant";

interface CanvasLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof ICanvasButtonVariants;
}

const CanvasButton = (props: CanvasLinkProps) => {
  const { variant } = props;

  return <button
    {...props} //put on top so the bottom props can override
    className={
      cn(CANVAS_BUTTON_VARIANTS[variant ? variant : "default"],
        props.className)}
  >
    {props.children}
  </button>

}

export default CanvasButton;