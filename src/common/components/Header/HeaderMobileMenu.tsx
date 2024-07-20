import Link from "next/link";
import Image from "next/image";
import { TbChevronRight, TbX } from "react-icons/tb";

import { IHeaderMenu } from ".";
import NextButton from "../NextButton";
import { MOBILE_HEADER_MENU } from "./constant";
import { cn } from "@/common/lib/cn";
import styles from "./header.module.scss";

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
            src="/images/languageai/logo.png"
            alt="languageai.id"
            width={100}
            height={50}
            className="h-full w-auto"
          />
        </Link>
        <NextButton
          type="button"
          variant="none"
          className="p-4 py-5"
          onClick={onCloseClick}
        >
          <TbX className="text-brand-primary" />
        </NextButton>
      </div>

      <div
        className={cn("px-4 text-sm", styles.header_mobile_menu_link_container)}
      >
        {MOBILE_HEADER_MENU.filter((menu: IHeaderMenu) =>
          isLogin ? menu.url !== "/login/" : menu.url !== "/account/"
        ).map((menu: IHeaderMenu) => (
          <Link
            key={menu.title}
            href={menu.url}
            className="flex items-center justify-between py-4 border-b"
            onClick={onCloseClick}
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
