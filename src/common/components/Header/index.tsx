import { useMemo } from "react";
import cookie from "js-cookie";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export interface IHeaderMenu {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const Header = () => {
  const isLogin = useMemo(() => {
    const cookieToken = cookie.get("token");
    return Boolean(cookieToken);
  }, []);

  return (
    <nav className="w-full">
      <HeaderMobile isLogin={isLogin} />
      <HeaderDesktop isLogin={isLogin} />
    </nav>
  );
};

export default Header;
