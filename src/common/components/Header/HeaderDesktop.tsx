import Link from "next/link";
import Image from "next/image";
import {
  TbLanguage,
  TbPhotoAi,
  TbSpeakerphone,
  TbUserCircle,
} from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";
import { FaRobot } from "react-icons/fa6";

import { cn } from "@/common/lib/cn";
import NextLink from "../NextLink";

interface IHeaderDesktop {
  isLogin: boolean;
  pathname: string;
}

const HeaderDesktop = (props: IHeaderDesktop) => {
  const { isLogin, pathname } = props;

  return (
    <div className="items-center justify-between hidden p-4 pt-2 bg-white lg:flex ">
      <Link href="/">
        <Image
          src="/images/languageai/logo.png"
          alt="languageai.id"
          width={150}
          height={65}
        />
      </Link>

      <div className="flex rounded-full">
        <NextLink
          href="/checkbot/"
          variant="none"
          className={cn(
            "flex items-center gap-2 p-2 px-4 border rounded-full hover:border-brand-primary",
            pathname === "/checkbot"
              ? "border-brand-primary "
              : "border-transparent"
          )}
        >
          <FaRobot />
          <span>AI Checkbot</span>
        </NextLink>
        <NextLink
          href="/translate/"
          variant="none"
          className={cn(
            "flex items-center gap-2 p-2 px-4 border rounded-full hover:border-brand-primary",
            pathname === "/translate"
              ? "border-brand-primary"
              : "border-transparent"
          )}
        >
          <TbLanguage />
          <span>AI Translate</span>
        </NextLink>
        <NextLink
          href="/image-to-text"
          variant="none"
          className={cn(
            "flex items-center gap-2 p-2 px-4 border rounded-full hover:border-brand-primary",
            pathname === "/image-to-text"
              ? "border-brand-primary"
              : "border-transparent"
          )}
        >
          <TbPhotoAi />
          <span>Image to Text</span>
        </NextLink>
        <NextLink
          href="/text-to-speech/"
          variant="none"
          className={cn(
            "flex items-center gap-2 p-2 px-4 border border-transparent rounded-full hover:border-brand-primary",
            pathname === "/text-to-speech"
              ? "border-brand-primary"
              : "border-transparent"
          )}
        >
          <TbSpeakerphone />
          <span>Text to Speech</span>
        </NextLink>
      </div>

        {isLogin ? (
          <NextLink href="/account" className="gap-1">
            <TbUserCircle />
            <span>ACCOUNT</span>
          </NextLink>
        ) : (
          <NextLink href={"/login"} className="gap-1">
            <span>SIGN IN</span>
            <TbArrowBarToRight />
          </NextLink>
        )}
    </div>
  );
};

export default HeaderDesktop;
