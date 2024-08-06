import Link from "next/link";
import { TbChevronRight } from "react-icons/tb";

import { cn } from "@/common/lib/cn";

import { MOBILE_HEADER_MENU } from "./constant";
import { IHeaderMenu } from ".";

type THeaderMobileMenuProps = {
  isLogin: boolean;
  isOpen: boolean;
  onLinkClick: () => void;
}

const HeaderMobileMenu = ({ onLinkClick, isLogin, isOpen}: THeaderMobileMenuProps) => {

  return (
    <div
      className={cn(
        "fixed top-[7.5vh] left-[2vw] z-20 w-[96vw] h-[91vh] bg-white drop-shadow rounded-md transition-transform duration-300 ease-in-out",
        isOpen ? 'translate-y-0' : '-translate-y-[100vh]'
      )}
    >
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
