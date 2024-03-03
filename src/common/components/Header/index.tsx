import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cookie from "js-cookie";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

interface IHeader {
  isLoginPage: boolean;
}

export interface IHeaderMenu {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const Header = (props: IHeader) => {
  const { isLoginPage } = props;

  const cookieToken = cookie.get("token");
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(Boolean(cookieToken));
  }, [cookieToken]);

  if (isLoginPage) {
    return (
      <nav className="p-2 lg:px-0 lg:mx-auto lg:container">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/languageai.png"
            alt="LanguageAi"
            width={30}
            height={30}
            className="border border-black"
          />
          <span>LanguageAi</span>
        </Link>
      </nav>
    );
  }

  return (
    <nav className="w-full">
      <HeaderMobile isLogin={isLogin} />
      <HeaderDesktop isLogin={isLogin} />
    </nav>
  );
};

export default Header;
