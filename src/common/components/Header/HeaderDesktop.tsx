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
    <div className="container mx-auto bg-white hidden lg:flex items-center justify-between py-2">
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

        <div className="px-4 flex items-center gap-4 ">
          {HEADER_MENU.filter(
            (menu: IHeaderMenu) =>
              menu.url !== "/login/" && menu.url !== "/profile/"
          ).map((menu: IHeaderMenu) => (
            <Link
              href={menu.url}
              key={menu.title}
              className="gap-1 flex items-center justify-between p-2 rounded-md hover:border hover:border-blue-700"
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
          className="text-white text-sm flex items-center gap-1 p-2 rounded-md bg-blue-700 hover:bg-blue-900"
        >
          <TbUserCircle />
          <span>Account</span>
        </Link>
      ) : (
        <div className="flex gap-4">
          <Link
            href="/login/"
            className="font-bold p-2 rounded-md hover:border hover:border-blue-700"
          >
            Login
          </Link>
          <Link
            href="/login/"
            className="text-white text-sm flex items-center gap-1 p-2 rounded-md bg-blue-700 hover:bg-blue-900"
          >
            <span className="font-bold">Get LanguageAI</span>
            <span>It's Free</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderDesktop;
