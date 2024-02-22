import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import cookie from "js-cookie";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderMobileMenu from "./HeaderMobileMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isLogin = useMemo(() => {
    const cookieToken = cookie.get("token");
    return Boolean(cookieToken);
  }, []);

  return (
    <nav className="w-full fixed z-10 left-0 top-0 border-b p-2 bg-white flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/languageai.png"
          alt="LanguageAI"
          width={35}
          height={35}
        />
        <span>languageai</span>
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
    </nav>
  );
};

export default Header;
