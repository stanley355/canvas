import { useContext } from "react";
import { AppContext } from "@/modules/app/components/AppContext";
import Modal from "@/common/components/Modal";
import LoginMain from "./LoginMain";

const LoginModal = () => {
  const { appDispatch } = useContext(AppContext);

  return (
    <Modal className="p-4">
      <LoginMain
        onBackClick={() => appDispatch({ key: "showLoginModal", value: false })}
        className="rounded-lg lg:min-w-0 md:max-w-[50%] mx-auto lg:max-w-[33%]"
      />
    </Modal>
  );
};

export default LoginModal;
