import Image from "next/image";
import Link from "next/link";
import { TbChevronRight, TbX } from "react-icons/tb";

import { MOBILE_HEADER_MENU } from "./constant";
import { IHeaderMenu } from ".";

type THeaderMobileMenuProps = {
  isLogin: boolean;
  onLinkClick: () => void;
};

const HeaderMobileMenu = ({ onLinkClick, isLogin }: THeaderMobileMenuProps) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen bg-white rounded-md animate-visible-forward">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="h-full p-2" onClick={onLinkClick}>
          <Image
            src="/images/languageai/icon.png"
            alt="languageai.id"
            width={25}
            height={25}
            className="w-auto h-full rounded-full"
            loading="eager"
          />
        </Link>
        <button className="h-full p-2 text-2xl" onClick={onLinkClick}>
          <TbX />
        </button>
      </div>
      <div className="h-full px-4 text-sm">
        {MOBILE_HEADER_MENU.filter((menu: IHeaderMenu) =>
          isLogin ? menu.url !== "/login/" : menu.url !== "/account/"
        ).map((menu: IHeaderMenu) => (
          <Link
            key={menu.title}
            href={menu.url}
            className="flex items-center justify-between py-4 border-b"
            onClick={onLinkClick}
          >
            <div className="flex items-center gap-2">
              {menu.icon}
              {menu.title}
            </div>
            <TbChevronRight className=" text-brand-primary" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
