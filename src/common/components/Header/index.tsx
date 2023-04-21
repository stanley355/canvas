import React from "react";
import { Inter } from "next/font/google";
import { SiTaichilang } from "react-icons/si";
import classNames from "classnames";
import Button from "../Button";
import MobileHeaderMenu from "./MobileHeaderMenu";
import DesktopHeaderMenu from "./DesktopHeaderMenu";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const isDesktop = useDesktopScreen();

  return (
    <header
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

      {isDesktop ? <DesktopHeaderMenu /> : <MobileHeaderMenu />}
    </header>
  );
};

export default Header;
