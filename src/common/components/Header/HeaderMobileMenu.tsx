import Link from "next/link";
import { TbChevronRight } from "react-icons/tb";

import { MOBILE_HEADER_MENU } from "./constant";
import { IHeaderMenu } from ".";

type THeaderMobileMenuProps = {
  isLogin: boolean;
  onLinkClick: () => void;
}

const HeaderMobileMenu = ({ onLinkClick, isLogin }: THeaderMobileMenuProps) => {

  return (
    <div className="fixed top-[7.5vh] left-[2vw] z-20 w-[96vw] h-[91vh] bg-white shadow border rounded-md animate-visible-forward">
      <div className="px-4 text-sm">
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
