import React from "react";
import {
  FaRobot,
  FaLanguage,
  FaGlobeAmericas,
  FaUserCircle,
} from "react-icons/fa";
import Button from "../Button";
import { IHeaderMenu } from ".";

const DesktopHeaderMenu = (props: IHeaderMenu) => {
  const { token } = props;

  return (
    <div className="flex flex-row items-center gap-4">
      <Button
        type="link"
        href="/premium/translate/"
        buttonClassName="flex flex-row items-center hover:underline"
        wrapperClassName="bg-white text-black px-2 rounded"
      >
        <FaLanguage className="text-3xl mr-1" />
        <span className="text-xl">Premium Translate</span>
      </Button>
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
        href={token ? "/profile/" : "/login/"}
        buttonClassName="flex flex-row items-center"
        wrapperClassName="hover:border-b"
      >
        <FaUserCircle className="text-xl mr-1" />
        <span className="text-xl">{token ? "Profile" : "Login"}</span>
      </Button>
    </div>
  );
};

export default DesktopHeaderMenu;
