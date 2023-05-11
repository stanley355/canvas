import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Inter } from "next/font/google";
import { SiTaichilang } from "react-icons/si";
import classNames from "classnames";
import Button from "../Button";
import MobileHeaderMenu from "./MobileHeaderMenu";
import DesktopHeaderMenu from "./DesktopHeaderMenu";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import cookie from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const isDesktop = useDesktopScreen();

  const [token, setToken] = useState("");

  useEffect(() => {
    if (!token) {
      const cookieToken = cookie.get("token");
      if (cookieToken) {
        setToken(String(cookieToken));
      }
    }
  }, [isDesktop]);

  const onLogoutClick = () => {
    if (token) {
      // Not using react router as it won't refresh the state
      cookie.remove("token");
      window.location.href = "/";
    }
    return "";
  };

  return (
    <nav
      className={classNames(
        "w-full p-4 border-b flex flex-row items-center justify-between",
        inter.className
      )}
    >
      <Button
        type="link"
        href="/"
        wrapperClassName="text-2xl font-semibold cursor-pointer"
        buttonClassName="flex flex-row items-center"
      >
        <SiTaichilang className="rounded-full mr-2" />
        <span>LanguageAI</span>
      </Button>

      {isDesktop ? (
        <DesktopHeaderMenu />
      ) : (
        <MobileHeaderMenu token={token} onLogoutClick={onLogoutClick} />
      )}
    </nav>
  );
};

export default Header;
