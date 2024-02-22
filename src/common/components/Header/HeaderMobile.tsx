import React from 'react'
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import cookie from "js-cookie";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderMobileMenu from "./HeaderMobileMenu";

interface IHeaderMobile {
  isLogin: boolean;
}

const HeaderMobile = (props: IHeaderMobile) => {
  const { isLogin } = props;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="lg:hidden w-full fixed z-10 left-0 top-0 border-b p-2 bg-white flex justify-between items-center">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/languageai.png"
          alt="LanguageAI"
          width={30}
          height={30}
            className='border border-black'
        />
        <span>LanguageAI</span>
      </Link>
      <button
        type="button"
        className="p-2 h-full"
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
  )
}

export default HeaderMobile