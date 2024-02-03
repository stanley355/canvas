import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import cookie from "js-cookie";
import classNames from "classnames";

import { HEADER_MENU } from "./constant";
import Button from "../Button";
import { useDesktopScreen } from "@/common/lib/hooks/useDesktopScreen";

const Header = () => {
  const isDesktop = useDesktopScreen();
  const [showModal, setShowModal] = useState(false);
  const cookieToken = cookie.get("token");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (cookieToken) {
      setIsLogin(true);
    }
  }, [cookieToken]);

  return (
    <nav className="bg-blue-900 w-full p-2 flex flex-row items-center justify-between fixed z-10">
      <Button
        type="link"
        href="/"
        wrapperClassName="text-2xl cursor-pointer"
        buttonClassName="flex items-center w-full"
      >
        <span className="text-white">Language</span>
        <Image
          src="/images/languageai_white.png"
          alt="Language AI"
          width={30}
          height={30}
        />
      </Button>
      <Button
        type="button"
        title={showModal ? "Close" : "Menu"}
        onClick={() => setShowModal(!showModal)}
        wrapperClassName="text-md active:underline lg:hidden text-white"
      />
      {(showModal || isDesktop) && (
        <div className="bg-white lg:bg-transparent text-blue-900 lg:text-white absolute lg:static lg:flex lg:gap-4 top-16 left-0 text-lg lg:text-2xl w-full lg:w-fit h-screen lg:h-fit px-2 lg:px-0">
          {HEADER_MENU.filter((menu) =>
            isLogin ? menu.url !== "/login/" : menu.url !== "/profile/"
          ).map((menu, i) => (
            <Button
              type="link"
              key={menu.url}
              href={menu.url}
              onClick={() => setShowModal(false)}
              buttonClassName="flex items-center gap-2 w-full h-full py-2 lg:pb-1"
              wrapperClassName={classNames(
                "group border-b border-blue-900 lg:border-white",
                i === 0 ? "border-t-0" : ""
              )}
            >
              <span>{menu.icon}</span>
              <span className=" lg:text-sm lg:font-semibold lg:group-hover:block">
                {menu.title}
              </span>
              <FaAngleRight className="ml-auto lg:hidden" />
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
