import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { FaAngleRight } from "react-icons/fa";
import { SiTaichilang } from "react-icons/si";
import cookie from "js-cookie";
import classNames from "classnames";
import { HEADER_MENU } from "./constant";
import Button from "../Button";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

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
        "bg-black w-full p-4 lg:py-2 flex flex-row items-center justify-between fixed lg:relative z-10",
        inter.className
      )}
    >
      <Button
        type="link"
        href="/"
        wrapperClassName="text-2xl font-semibold cursor-pointer"
        buttonClassName="flex items-center w-full"
      >
        <SiTaichilang className="mr-2" />
        <span>LanguageAI</span>
      </Button>
      <Button
        type="button"
        title={showModal ? "Close" : "Menu"}
        ariaLabel="header_menu_btn"
        onClick={() => setShowModal(!showModal)}
        wrapperClassName="text-md active:underline lg:hidden"
      />
      {(showModal || isDesktop) && (
        <div className="bg-black absolute lg:static lg:flex lg:gap-4 top-16 left-0 text-lg lg:text-xl w-full lg:w-fit h-screen lg:h-fit px-2 lg:px-0">
          {HEADER_MENU.filter((menu) =>
            token ? menu.title !== "Login" : menu.title !== "Profile"
          ).map((menu, i) => (
            <Button
              type="link"
              key={menu.url}
              href={menu.url}
              buttonClassName="flex items-center gap-2"
              wrapperClassName={classNames(
                "border-b lg:border-b-0 p-2 lg:p-0 hover:border-b",
                i === 0 ? "border-t lg:border-t-0" : ""
              )}
            >
              {menu.icon}
              <span>{menu.title}</span>
              <FaAngleRight className="ml-auto lg:hidden" />
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
