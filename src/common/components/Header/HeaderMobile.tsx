import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobileMenu from "./HeaderMobileMenu";
import { TbMenu } from "react-icons/tb";

interface IHeaderMobile {
  isLogin: boolean;
}

const HeaderMobile = (props: IHeaderMobile) => {
  const { isLogin } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between w-full h-full lg:hidden">
      <Link href="/" className="h-full p-2" onClick={() => setShowMenu(false)}>
        <Image
          src="/images/languageai/icon.png"
          alt="languageai.id"
          width={25}
          height={25}
          className="w-auto h-full rounded-full"
          loading="eager"
        />
      </Link>
      <button
        className="h-full p-2 text-2xl"
        onClick={() => setShowMenu(!showMenu)}
      >
        <TbMenu />
      </button>
      {showMenu && (
        <HeaderMobileMenu
          isLogin={isLogin}
          onLinkClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
};

export default HeaderMobile;
