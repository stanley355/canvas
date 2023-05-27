import React from "react";
import {
  FaRobot,
  FaLanguage,
  FaGlobeAmericas,
  FaUserCircle,
  FaPhone,
} from "react-icons/fa";
import Button from "../Button";
import { IHeaderMenu } from ".";

const DesktopHeaderMenu = (props: IHeaderMenu) => {
  const { token, onLogoutClick } = props;

  return (
    <div className="flex flex-row items-center gap-4">
      <Button
        type="link"
        href="/checkbot/"
        buttonClassName="flex flex-row items-center"
        wrapperClassName="hover:border-b"
      >
        <FaRobot className="text-2xl mr-1" />
        <span className="text-xl">AI Checkbot</span>
      </Button>
      <Button
        type="link"
        href="/translate/"
        buttonClassName="flex flex-row items-center"
        wrapperClassName="hover:border-b"
      >
        <FaLanguage className="text-3xl mr-1" />
        <span className="text-xl">AI Translate</span>
      </Button>
      <Button
        type="link"
        href="/world-dictionary/"
        buttonClassName="flex flex-row items-center"
        wrapperClassName="hover:border-b"
      >
        <FaGlobeAmericas className="text-xl mr-1" />
        <span className="text-xl">AI World Dictionary</span>
      </Button>
      <Button
        type={token ? "button" : "link"}
        href="/login/"
        buttonClassName="flex flex-row items-center"
        wrapperClassName="hover:border-b"
        onClick={onLogoutClick}
      >
        <FaUserCircle className="text-xl mr-1" />
        <span className="text-xl">{token ? "Logout" : "Login"}</span>
      </Button>
    </div>
  );
};

export default DesktopHeaderMenu;
