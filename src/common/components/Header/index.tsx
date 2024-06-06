import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cookie from "js-cookie";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

interface IHeader {
  isLoginPage: boolean;
  pathname: string;
}

export interface IHeaderMenu {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const Header = (props: IHeader) => {
  const { isLoginPage, pathname } = props;

  const cookieToken = cookie.get("token");
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(Boolean(cookieToken));
  }, [cookieToken]);

  if (isLoginPage) {
    return <Link href="/">
      <Image
        src="/images/languageai/languageai_black.png"
        alt="languageai.id"
        width={500}
        height={65}
        className="py-4"
      />
    </Link>
  }

  return (
    <nav className="w-full">
      <HeaderMobile isLogin={isLogin} pathname={pathname} />
      <HeaderDesktop isLogin={isLogin} pathname={pathname} />
    </nav>
  );
};

export default Header;
