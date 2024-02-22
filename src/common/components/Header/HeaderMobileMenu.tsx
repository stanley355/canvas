import Link from "next/link";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { TbChevronRight } from "react-icons/tb";
import { HEADER_MENU } from "./constant";
import { IHeaderMenu } from ".";

interface IHeaderMobileMenu {
  isLogin: boolean;
  onCloseClick: () => void;
}

const HeaderMobileMenu = (props: IHeaderMobileMenu) => {
  const { onCloseClick, isLogin } = props;

  return (
    <div className="w-full fixed left-0 top-0 z-20 h-full bg-white">
      <div className="w-full border-b p-2 bg-white flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/languageai.png"
            alt="LanguageAI"
            width={35}
            height={35}
            className='border border-black'
          />
          <span>languageai</span>
        </Link>
        <button type="button" className="p-2 h-full" onClick={onCloseClick}>
          <RxCross1 />
        </button>
      </div>

      <div className="px-4">
        {HEADER_MENU.filter((menu: IHeaderMenu) =>
          isLogin ? menu.url !== "/login/" : menu.url !== "/profile/"
        ).map((menu: IHeaderMenu) => (
          <Link
            href={menu.url}
            key={menu.title}
            className="border-b py-4 flex items-center justify-between"
          >
            <div className="flex gap-2 items-center text-lg">
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
