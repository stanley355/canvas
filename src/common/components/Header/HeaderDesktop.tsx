import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TbArrowAutofitDown,
  TbArrowDown,
  TbBrandGoogle,
  TbChevronDown,
  TbDiscount,
  TbHelp,
  TbHelpCircle,
  TbLanguage,
  TbPhotoAi,
  TbSpeakerphone,
  TbUserCircle,
} from "react-icons/tb";
import { TbArrowBarToRight } from "react-icons/tb";
import { FaRobot } from "react-icons/fa6";

import CanvasLink from "../ui/CanvasLink";
import CanvasButton from "../ui/CanvasButton";
import HeaderDesktopPricingMenu from "./HeaderDesktopPricingMenu";
import { cn } from "@/common/lib/cn";

interface IHeaderDesktop {
  isLogin: boolean;
  pathname: string;
}

const HeaderDesktop = (props: IHeaderDesktop) => {
  const { isLogin, pathname } = props;
  const [showPricingMenu, setShowPricingMenu] = useState(false);

  return (
    <div className="items-center justify-between hidden p-4 bg-white lg:flex">
      <Link href="/">
        <Image
          src="/images/languageai/languageai_black.png"
          alt="languageai.id"
          width={150}
          height={65}
        />
      </Link>

      <div className="flex border rounded-full">
        <CanvasLink
          href="/checkbot/"
          variant="none"
          className={cn(
            "flex items-center gap-2 p-2 px-4 border rounded-full hover:border-black",
            pathname === "/checkbot" ? "border-black" : "border-transparent"
          )}
        >
          <FaRobot />
          <span>AI Checkbot</span>
        </CanvasLink>
        <CanvasLink
          href="/translate/"
          variant="none"
          className={cn(
            "flex items-center gap-2 p-2 px-4 border rounded-full hover:border-black",
            pathname === "/translate" ? "border-black" : "border-transparent"
          )}
        >
          <TbLanguage />
          <span>AI Translate</span>
        </CanvasLink>
        <CanvasLink
          href="/image-to-text"
          variant="none"
          className={cn(
            "flex items-center gap-2 p-2 px-4 border rounded-full hover:border-black",
            pathname === "/image-to-text"
              ? "border-black"
              : "border-transparent"
          )}
        >
          <TbPhotoAi />
          <span>Image to Text</span>
        </CanvasLink>
        <CanvasLink
          href="/text-to-speech/"
          variant="none"
          className={cn(
            "flex items-center gap-2 p-2 px-4 border border-transparent rounded-full hover:border-black",
            pathname === "/text-to-speech"
              ? "border-black"
              : "border-transparent"
          )}
        >
          <TbSpeakerphone />
          <span>Text to Speech</span>
        </CanvasLink>
      </div>

      <div className="relative flex gap-2">
        {showPricingMenu && (
          <HeaderDesktopPricingMenu
            onCloseClick={() => setShowPricingMenu(false)}
          />
        )}
        <CanvasButton
          variant="ghost"
          onClick={() => setShowPricingMenu(true)}
          className="items-center border border-transparent hover:border-black "
        >
          <span>Pricing</span>
          <TbChevronDown />
        </CanvasButton>
        {isLogin ? (
          <CanvasLink href="/account">
            <TbUserCircle />
            <span>ACCOUNT</span>
          </CanvasLink>
        ) : (
          <CanvasLink href={"/login"}>
            <span>SIGN IN</span>
            <TbArrowBarToRight />
          </CanvasLink>
        )}
      </div>
    </div>
  );
};

export default HeaderDesktop;
