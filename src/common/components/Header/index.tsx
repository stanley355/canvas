import { useMemo } from "react";
import cookie from "js-cookie";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const isLogin = useMemo(() => {
    const cookieToken = cookie.get("token");
    return Boolean(cookieToken);
  }, []);

  return (
    <nav>
      <HeaderMobile isLogin={isLogin} />
    </nav>
  );
};

export default Header;
