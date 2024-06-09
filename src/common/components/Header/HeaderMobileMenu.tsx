import Link from "next/link";
import Image from "next/image";
import { TbChevronRight, TbX } from "react-icons/tb";

import CanvasButton from "../ui/CanvasButton";

import { MOBILE_HEADER_MENU } from "./constant";
import { IHeaderMenu } from ".";
import styles from "./header.module.scss";
import { cn } from "@/common/lib/cn";

interface IHeaderMobileMenu {
  isLogin: boolean;
  onCloseClick: () => void;
}

const HeaderMobileMenu = (props: IHeaderMobileMenu) => {
  const { onCloseClick, isLogin } = props;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-20 w-full h-full bg-white",
        styles.header_mobile_menu
      )}
    >
      <div className="flex items-center justify-between w-full border-b">
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
          className="p-4 py-5"
          onClick={onCloseClick}
        >
          <TbX />
        </CanvasButton>
      </div>

      <div className={cn("px-4", styles.header_mobile_menu_link_container)}>
        {MOBILE_HEADER_MENU.filter((menu: IHeaderMenu) =>
          isLogin ? menu.url !== "/login/" : menu.url !== "/account/"
        ).map((menu: IHeaderMenu) => (
          <Link
            key={menu.title}
            href={menu.url}
            className="flex items-center justify-between py-4 border-b"
            onClick={onCloseClick}
          >
            <div className="flex items-center gap-2 text-lg">
              {menu.icon}
              {menu.title}
            </div>
            <TbChevronRight className=" text-emerald-800" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
