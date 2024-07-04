import { Card } from "@/common/components/ui/card";
import React from "react";
import LoginCard from "./LoginCard";
import Modal from "@/common/components/Modal";

const LoginModal = () => {
  return (
    <Modal>
      <div className="px-4 mt-[30%] lg:mt-[10%]">
        <LoginCard />
      </div>
    </Modal>
  );
};

export default LoginModal;
