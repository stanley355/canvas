import { cn } from "@/common/lib/cn";
import styles from "./modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { children } = props;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-full bg-[#17255455] z-50",
        styles.modal
      )}
    >
      {children}
    </div>
  );
};

export default Modal;
