type TModalProps = {
  children: React.ReactNode;
}

const Modal = ({ children }: TModalProps) => {

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/50 animate-visible-forward">
      {children}
    </div>
  );
};

export default Modal;
