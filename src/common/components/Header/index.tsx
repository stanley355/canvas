import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { FaAngleRight } from "react-icons/fa";
import cookie from "js-cookie";
import classNames from "classnames";

import { HEADER_MENU } from "./constant";
import Button from "../Button";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const isDesktop = useDesktopScreen();
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!token) {
      const cookieToken = cookie.get("token");
      if (cookieToken) {
        setToken(String(cookieToken));
      }
    }
  }, [token]);

  return (
    <nav
      className={classNames(
        "bg-blue-900 w-full p-4 lg:py-2 flex flex-row items-center justify-between fixed z-10",
        inter.className
      )}
    >
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
            token ? menu.title !== "Login" : menu.title !== "Profile"
          ).map((menu, i) => (
            <Button
              type="link"
              key={menu.url}
              href={menu.url}
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
