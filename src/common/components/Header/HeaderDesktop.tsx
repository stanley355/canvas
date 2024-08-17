import Link from "next/link";
import Image from "next/image";
import { TbUserCircle } from "react-icons/tb";
import { FaRupiahSign } from "react-icons/fa6";
import HeaderDesktopMenu from "./HeaderDesktopMenu";



interface IHeaderDesktop {
  isLogin: boolean;
  pathname: string;
}

const HeaderDesktop = (props: IHeaderDesktop) => {
  const { isLogin, pathname } = props;

  return (
    <div className="items-center justify-between hidden p-2 bg-white lg:flex">
      <Link href="/" className="mr-2">
        <Image
          src="/images/languageai/logo.png"
          alt="languageai.id"
          width={150}
          height={65}
          loading="eager"
        />
      </Link>
      <HeaderDesktopMenu />
      <div className="flex items-center gap-2">
        <Link
          href="/plans"
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:underline "
        >
          <FaRupiahSign />
          <span>Pricing</span>
        </Link>

        <Link
          href={isLogin ? "/account" : "/account/login"}
          className="flex items-center gap-2 px-4 py-2 text-white rounded-full hover:bg-blue-800 bg-brand-primary"
        >
          <TbUserCircle />
          <span>{isLogin ? "Account" : "Login"}</span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderDesktop;
