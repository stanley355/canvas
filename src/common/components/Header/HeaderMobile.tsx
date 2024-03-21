import React from "react";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import cookie from "js-cookie";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderMobileMenu from "./HeaderMobileMenu";

interface IHeaderMobile {
  isLogin: boolean;
  pathname: string;
}

const HeaderMobile = (props: IHeaderMobile) => {
  const { isLogin, pathname } = props;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-between w-full p-2 bg-white border-b lg:hidden">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/languageai.png"
          alt="LanguageAi Navbar"
          width={30}
          height={30}
          className="border border-black"
        />
        <span>LanguageAi</span>
      </Link>
      <button
        type="button"
        className="h-full p-2"
        aria-label="Open Menu"
        aria-labelledby="Open Menu By"
        onClick={() => setShowMenu(true)}
      >
        <RxHamburgerMenu />
      </button>
      {showMenu && (
        <HeaderMobileMenu
          isLogin={isLogin}
          onCloseClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
};

export default HeaderMobile;
