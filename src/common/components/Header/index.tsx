import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cookie from "js-cookie";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

interface IHeader {
  isSimpleHeader: boolean;
  pathname: string;
}

export interface IHeaderMenu {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const Header = (props: IHeader) => {
  const { isSimpleHeader, pathname } = props;

  const cookieToken = cookie.get("token");
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(Boolean(cookieToken));
  }, [cookieToken]);

  if (isSimpleHeader) {
    return (
      <Link href="/" className="w-full">
        <Image
          src="/images/languageai/logo.png"
          alt="languageai.id"
          width={200}
          height={65}
          className="p-4 mx-auto"
        />
      </Link>
    );
  }

  return (
    <nav className="w-full">
      <HeaderMobile isLogin={isLogin} pathname={pathname} />
      <HeaderDesktop isLogin={isLogin} pathname={pathname} />
    </nav>
  );
};

export default Header;
