import Link from "next/link";
import Image from "next/image";
import {
  TbLanguage,
  TbPhotoAi,
  TbSpeakerphone,
  TbUserCircle,
} from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";
import { FaRobot, FaRupiahSign } from "react-icons/fa6";

import { cn } from "@/common/lib/cn";
import NextLink from "../NextLink";
import { PiStudentDuotone } from "react-icons/pi";

interface IHeaderDesktop {
  isLogin: boolean;
  pathname: string;
}

const HeaderDesktop = (props: IHeaderDesktop) => {
  const { isLogin, pathname } = props;

  return (
    <div className="items-center justify-between hidden p-2 bg-white lg:flex text-sm">
      <div className="flex gap-2 items-center">
        <Link href="/" className="mr-2">
          <Image
            src="/images/languageai/logo.png"
            alt="languageai.id"
            width={150}
            height={65}
          />
        </Link>
        <NextLink
          href="/translate/"
          variant="outline"
          className={cn(
            "rounded-full",
            pathname === "/translate"
              ? "border-brand-primary"
              : "border-transparent"
          )}
        >
          <TbLanguage />
          <span>AI Translate</span>
        </NextLink>
        <NextLink
          href="/checkbot/"
          variant="outline"
          className={cn(
            "rounded-full",
            pathname === "/checkbot"
              ? "border-brand-primary "
              : "border-transparent"
          )}
        >
          <FaRobot />
          <span>AI Checkbot</span>
        </NextLink>
        <NextLink
          href="/text-to-speech/"
          variant="outline"
          className={cn(
            "rounded-full",
            pathname === "/text-to-speech"
              ? "border-brand-primary"
              : "border-transparent"
          )}
        >
          <TbSpeakerphone />
          <span>AI Text to Speech</span>
        </NextLink>
      </div>

      <div className="flex items-center gap-2">
        <NextLink
          href="/students/"
          variant="outline"
          className={cn(
            "rounded-full",
            pathname.includes("students")
              ? "border-brand-primary"
              : "border-transparent"
          )}
        >
          <PiStudentDuotone />
          <span>AI Students</span>
        </NextLink>
        <NextLink
          href="/plans/"
          variant="outline"
          className={cn(
            "rounded-full",
            pathname.includes("plans")
              ? "border-brand-primary"
              : "border-transparent"
          )}
        >
          <FaRupiahSign />
          <span>Pricing</span>
        </NextLink>

        <NextLink
          href={isLogin ? "/account" : "/login"}
          variant="default"
          className="ml-2"
        >
          <TbUserCircle />
          <span>{isLogin ? "Account" : "Login"}</span>
        </NextLink>
      </div>
    </div>
  );
};

export default HeaderDesktop;
