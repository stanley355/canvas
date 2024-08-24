import { useEffect, useState } from "react";
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
    <nav className="w-full">
      <HeaderMobile isLogin={isLogin} />
      <HeaderDesktop isLogin={isLogin} />
    </nav>
  );
};

export default Header;
