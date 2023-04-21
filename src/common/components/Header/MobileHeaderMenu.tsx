import React, { useState } from "react";
import {
  FaBuffer,
  FaTimes,
  FaRobot,
  FaLanguage,
  FaAngleRight,
} from "react-icons/fa";
import Button from "../Button";

const MobileHeaderMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const Menu = () => (
    <div className="absolute -top-5 -right-4 bg-black border z-10 text-lg h-screen w-60">
      <Button
        type="button"
        buttonClassName="p-4"
        wrapperClassName="text-right text-2xl mt-2"
        onClick={() => setShowMenu(false)}
      >
        <FaTimes />
      </Button>
      <Button
        type="link"
        href="/checkbot/"
        buttonClassName="p-4 flex flex-row items-center"
        wrapperClassName="my-4 hover:bg-white hover:text-black"
      >
        <FaRobot className="text-3xl mr-2" />
        <span className="pt-2 text-2xl">Checkbot</span>
        <FaAngleRight className="text-3xl float-right ml-8" />
      </Button>
      <Button
        type="link"
        href="/translate/"
        buttonClassName="p-4 flex flex-row items-center"
        wrapperClassName="my-4 hover:bg-white hover:text-black"
      >
        <FaLanguage className="text-3xl mr-2" />
        <span className="text-2xl">Translate</span>
        <FaAngleRight className="text-3xl float-right ml-8" />
      </Button>
    </div>
  );

  return (
    <div className="relative">
      <Button
        type="button"
        onClick={() => setShowMenu(true)}
        buttonClassName="flex items-center justify-center text-2xl"
      >
        <FaBuffer />
      </Button>
      {showMenu && <Menu />}
    </div>
  );
};

export default MobileHeaderMenu;