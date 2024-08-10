interface ModalProps {
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { children } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#17255455] z-50 animate-visible-forward">
      {children}
    </div>
  );
};

export default Modal;
