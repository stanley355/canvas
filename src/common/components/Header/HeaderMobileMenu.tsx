import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { HEADER_MENU } from "./constant";
import { TbChevronRight } from "react-icons/tb";
import Cookies from "js-cookie";
import { useMemo } from "react";

interface IHeaderMenu {
  title: string;
  url: string;
  icon: React.ReactNode
}

interface IHeaderMobileMenu {
  isLogin: boolean;
  onCloseClick: () => void;
}

const HeaderMobileMenu = (props: IHeaderMobileMenu) => {
  const { onCloseClick, isLogin } = props;
  // const cookieToken: string | undefined = Cookies.get("token");
  // console.log(cookieToken);

  //  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   if (cookieToken) {
  //     setIsLogin(true);
  //   }
  // }, [cookieToken]);

  return (
    <div className='w-full fixed left-0 top-0 z-20 h-full bg-white'>
      <div className="w-full border-b p-2 bg-white flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/languageai.png"
            alt="LanguageAI"
            width={35}
            height={35}
          />
          <span>languageai</span>
        </Link>
        <button type="button" className="p-2 h-full" onClick={onCloseClick}>
          <RxCross1 />
        </button>
      </div>

      <div className="px-4">
        {HEADER_MENU
          .filter((menu: IHeaderMenu) => isLogin ? menu.url !== '/login/' : menu.url !== '/profile/')
          .map((menu: IHeaderMenu) =>
            <Link href={menu.url} key={menu.title} className="border-b py-4 flex items-center justify-between">
              <div className="flex gap-2 items-center text-lg">
                {menu.icon}
                <span>{menu.title}</span>
              </div>
              <TbChevronRight />
            </Link>)}
      </div>
    </div>
  )
}

export default HeaderMobileMenu