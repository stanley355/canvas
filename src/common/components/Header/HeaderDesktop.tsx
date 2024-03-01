import Link from "next/link";
import Image from "next/image";
import { HEADER_MENU } from "./constant";
import { IHeaderMenu } from ".";
import { TbUserCircle } from "react-icons/tb";

interface IHeaderDesktop {
  isLogin: boolean;
}

const HeaderDesktop = (props: IHeaderDesktop) => {
  const { isLogin } = props;
  return (
    <div className="container items-center justify-between hidden py-2 mx-auto bg-white lg:flex">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/languageai.png"
            alt="LanguageAI"
            width={30}
            height={30}
            className="border border-black"
          />
          <span>LanguageAI</span>
        </Link>

        <div className="flex items-center gap-4 px-4 ">
          {HEADER_MENU.filter(
            (menu: IHeaderMenu) =>
              menu.url !== "/login/" && menu.url !== "/profile/"
          ).map((menu: IHeaderMenu) => (
            <Link
              href={menu.url}
              key={menu.title}
              className="flex items-center justify-between gap-1 p-2 border border-transparent rounded-md hover:border-black"
            >
              {menu.icon}
              <span>{menu.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {isLogin ? (
        <Link
          href="/login/"
          className="flex items-center gap-1 p-2 text-sm text-white bg-black border rounded-md h-fit hover:text-black hover:bg-white hover:border-black"
        >
          <TbUserCircle />
          <span>Account</span>
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <Link
            href="/login/"
            className="p-2 border border-transparent rounded-md hover:border-black"
          >
            Login
          </Link>
          <Link
            href="/login/"
            className="flex items-center gap-1 p-2 text-sm text-white bg-black border rounded-md h-fit hover:text-black hover:bg-white hover:border-black"
          >
            <span className="font-bold">Get LanguageAI</span>
            <span>It&apos;s Free</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderDesktop;
