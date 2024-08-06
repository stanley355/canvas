import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cookie from "js-cookie";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

interface IHeader {
  pathname: string;
}

export interface IHeaderMenu {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const Header = ({ pathname }: IHeader) => {

  const cookieToken = cookie.get("token");
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(Boolean(cookieToken));
  }, [cookieToken]);

  return (
    <nav className="w-full h-[7.5vh] border border-red-500">
      <HeaderMobile isLogin={isLogin} pathname={pathname} />
      {/* <HeaderDesktop isLogin={isLogin} pathname={pathname} /> */}
    </nav>
  );
};

export default Header;
