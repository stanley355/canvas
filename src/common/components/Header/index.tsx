import { useEffect, useState } from "react";
import cookie from "js-cookie";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export interface IHeaderMenu {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const Header = () => {
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
