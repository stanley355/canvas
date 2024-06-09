import { cn } from "@/common/lib/cn";
import {
  CANVAS_BUTTON_VARIANTS,
  ICanvasButtonVariants,
} from "./CanvasUiVariant";
import { useEffect, useState } from "react";
import { TbProgress } from "react-icons/tb";

interface CanvasLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof ICanvasButtonVariants;
  isLoading?: boolean;
}

const CanvasButton = (props: CanvasLinkProps) => {
  const { variant, isLoading, ...rest } = props;
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    if (!isLoading) {
      setLoadingText("Loading");
    }
    setTimeout(() => setLoadingText("Processing"), 2000);
    setTimeout(() => setLoadingText("Cleaning"), 4000);
  }, [isLoading]);

  return (
    <button
      {...rest} //put on top so the bottom props can override
      disabled={isLoading}
      className={cn(
        CANVAS_BUTTON_VARIANTS[variant ? variant : "default"],
        props.className
      )}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <TbProgress className="animate-spin" />
          <span>{loadingText}</span>
        </div>
      ) : (
        props.children
      )}
    </button>
  );
};

export default CanvasButton;
