import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderMobileMenu from "./HeaderMobileMenu";

interface IHeaderMobile {
  isLogin: boolean;
  pathname: string;
}

const HeaderMobile = (props: IHeaderMobile) => {
  const { isLogin } = props;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-between w-full p-2 bg-white border-b lg:hidden">
      <Link href="/">
        <Image
          src="/images/languageai/languageai_black.png"
          alt="languageai.id"
          width={150}
          height={65}
          className="h-full"
        />
      </Link>
      <button
        type="button"
        className="h-full p-2"
        aria-label="Open Menu"
        aria-labelledby="Open Menu By"
        onClick={() => setShowMenu(true)}
      >
        Menu
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
