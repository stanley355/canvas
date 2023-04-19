import React from "react";
import { Inter } from 'next/font/google'
import {SiTaichilang} from 'react-icons/si';
import classNames from "classnames";
import Button from "./Button";

const inter = Inter({ subsets: ['latin'] })

const Header = () => {
  return (
    <header className={classNames("w-full p-4 border-b", inter.className)}>
      <Button
        type="button"
        title="LangGPT"
        wrapperClassName="text-2xl font-semibold"
        buttonClassName="flex flex-row items-center"
      >
        <SiTaichilang className="rounded-full mr-2" />
        <span>LangAI</span>
      </Button>
    </header>
  );
};

export default Header;
