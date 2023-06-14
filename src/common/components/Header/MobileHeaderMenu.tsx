import React, { useState } from "react";
import {
  FaBuffer,
  FaTimes,
  FaRobot,
  FaLanguage,
  FaAngleRight,
  FaGlobeAmericas,
  FaUserCircle,
  FaPhone,
  FaPlusCircle,
  FaPlusSquare,
} from "react-icons/fa";
import Button from "../Button";
import { IHeaderMenu } from ".";

const MobileHeaderMenu = (props: IHeaderMenu) => {
  const { token } = props;

  return (
    <div className="absolute top-16 left-0 bg-black z-10 text-lg h-screen w-full px-2">
      <Button
        type="link"
        href="/premium/checkbot/"
        buttonClassName="flex items-center"
        wrapperClassName="border-t p-2"
      >
        <FaPlusCircle className="mr-2" />
        <span>Premium Checkbot</span>
        <FaAngleRight className="ml-auto" />
      </Button>
      <Button
        type="link"
        href="/premium/translate/"
        buttonClassName="flex items-center"
        wrapperClassName="border-t p-2"
      >
        <FaPlusSquare className="mr-2" />
        <span>Premium Translate</span>
        <FaAngleRight className="ml-auto" />
      </Button>
      <Button
        type="link"
        href="/checkbot/"
        buttonClassName="flex items-center"
        wrapperClassName="border-t p-2"
      >
        <FaRobot className="mr-2" />
        <span>LanguageAI Checkbot</span>
        <FaAngleRight className="ml-auto" />
      </Button>
      <Button
        type="link"
        href="/translate/"
        buttonClassName="flex items-center"
        wrapperClassName="border-t p-2"
      >
        <FaLanguage className="mr-2" />
        <span>LanguageAI Translate</span>
        <FaAngleRight className="ml-auto" />
      </Button>
      <Button
        type="link"
        href={token ? "/profile/" : "/login/"}
        buttonClassName="flex items-center"
        wrapperClassName="border-y p-2"
      >
        <FaUserCircle className="mr-2" />
        <span>{token ? "Profile" : "Login"}</span>
        <FaAngleRight className="ml-auto"/>
      </Button>
    </div>
  );
};

export default MobileHeaderMenu;
