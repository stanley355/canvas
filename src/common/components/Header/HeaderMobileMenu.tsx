import Link from "next/link";
import Image from "next/image";
import { TbChevronRight, TbX } from "react-icons/tb";
import CanvasButton from "../ui/CanvasButton";
import { HEADER_MENU } from "./constant";
import { IHeaderMenu } from ".";

import { cn } from "@/common/lib/cn";
interface IHeaderMobileMenu {
  isLogin: boolean;
  onCloseClick: () => void;
}


const HeaderMobileMenu = (props: IHeaderMobileMenu) => {
  const { onCloseClick, isLogin } = props;

  return (
    <div className="fixed top-0 left-0 z-20 w-full h-full bg-white">
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

      <div className={cn("px-4")}>
        {HEADER_MENU.filter((menu: IHeaderMenu) =>
          isLogin ? menu.url !== "/login/" : menu.url !== "/account/"
        ).map((menu: IHeaderMenu) => (
          <Link
            href={menu.url}
            key={menu.title}
            className="flex items-center justify-between py-4 border-b"
            onClick={onCloseClick}
          >
            <div className="flex items-center gap-2 text-lg">
              {menu.icon}
              <span>{menu.title}</span>
            </div>
            <TbChevronRight />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
