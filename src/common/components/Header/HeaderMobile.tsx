import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobileMenu from "./HeaderMobileMenu";
import NextButton from "../NextButton";

interface IHeaderMobile {
  isLogin: boolean;
  pathname: string;
}

const HeaderMobile = (props: IHeaderMobile) => {
  const { isLogin } = props;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-between w-full bg-white border-b lg:hidden">
      <Link href="/" className="pl-4">
        <Image
          src="/images/languageai/logo.png"
          alt="languageai.id"
          width={100}
          height={50}
          className="w-2/3 h-full"
        />
      </Link>
      <NextButton
        type="button"
        variant="none"
        className="p-4"
        onClick={() => setShowMenu(true)}
      >
        Menu
      </NextButton>
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
