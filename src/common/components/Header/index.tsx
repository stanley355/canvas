import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { SiTaichilang } from "react-icons/si";
import cookie from "js-cookie";
import classNames from "classnames";
import Button from "../Button";
import MobileHeaderMenu from "./MobileHeaderMenu";
import DesktopHeaderMenu from "./DesktopHeaderMenu";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

export interface IHeaderMenu {
  token: string;
}

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
  }, [isDesktop]);

  return (
    <nav
      className={classNames(
        "bg-black w-full p-4 flex flex-row items-center justify-between fixed lg:relative",
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

      {isDesktop ? (
        <DesktopHeaderMenu token={token} />
      ) : (
        <Button
          type="button"
          title={showModal ? "Close" : "Menu"}
          ariaLabel="header_menu_btn"
          onClick={() => setShowModal(!showModal)}
          wrapperClassName="text-md active:underline"
        />
      )}
      {showModal && <MobileHeaderMenu token={token} />}
    </nav>
  );
};

export default Header;
