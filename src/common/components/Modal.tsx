import { cn } from "../lib/cn";

type TModalProps = {
  className?:string;
  children: React.ReactNode;
};

const Modal = ({ children, className }: TModalProps) => {
  return (
    <div className={cn("fixed top-0 left-0 z-50 w-full h-full bg-black/50 animate-visible-forward", className)}>
      {children}
    </div>
  );
};

export default Modal;
