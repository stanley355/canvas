import React from "react";
import {
  FaRobot,
  FaLanguage,
} from "react-icons/fa";
import Button from "../Button";

const DesktopHeaderMenu = () => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Button type="link" href="/checkbot/" buttonClassName="flex flex-row items-center" wrapperClassName="hover:border-b">
        <FaRobot className="text-2xl mr-1" />
        <span className="text-xl">AI Checkbot</span>
      </Button>
      <Button type="link" href="/translate/" buttonClassName="flex flex-row items-center" wrapperClassName="hover:border-b">
        <FaLanguage className="text-3xl mr-1" />
        <span className="text-xl">AI Translate</span>
      </Button>
    </div>
  );
};

export default DesktopHeaderMenu;
