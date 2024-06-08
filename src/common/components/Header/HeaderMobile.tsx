import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobileMenu from "./HeaderMobileMenu";
import CanvasButton from "../ui/CanvasButton";

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
          src="/images/languageai/languageai_black.png"
          alt="languageai.id"
          width={150}
          height={65}
          className="h-full"
        />
      </Link>
      <CanvasButton
        type="button"
        variant="none"
        className="p-4"
        onClick={() => setShowMenu(true)}
      >
        Menu
      </CanvasButton>
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
