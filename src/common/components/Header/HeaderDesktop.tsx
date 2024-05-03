import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TbArrowAutofitDown,
  TbBrandGoogle,
  TbDiscount,
  TbHelp,
  TbHelpCircle,
  TbLanguage,
  TbPhotoAi,
  TbSpeakerphone,
  TbUserCircle,
} from "react-icons/tb";

import CanvasLink from "../ui/CanvasLink";
import CanvasButton from "../ui/CanvasButton";
import { cn } from "@/common/lib/cn";
import { PiStudent, PiStudentBold, PiStudentDuotone } from "react-icons/pi";
import { FaRupiahSign } from "react-icons/fa6";

interface IHeaderDesktop {
  isLogin: boolean;
  pathname: string;
}

const HeaderDesktop = (props: IHeaderDesktop) => {
  const { isLogin, pathname } = props;
  const [showOtherMenu, setShowOtherMenu] = useState(false);
  const [showStudentMenu, setShowStudentMenu] = useState(false);
  const layoutLinkClassnames =
    "border border-transparent rounded-md hover:border-black";

  useEffect(() => {
    setShowOtherMenu(false);
    setShowStudentMenu(false);
  }, [pathname]);

  return (
    <div className="container items-center justify-between hidden py-2 mx-auto bg-white lg:flex">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-1 mr-2">
          <Image
            src="/images/languageai.png"
            alt="LanguageAi"
            width={30}
            height={30}
            className="border border-black"
          />
          <span>LanguageAi</span>
        </Link>

        <div className="flex items-center gap-4 px-4 ">
          <CanvasLink
            variant="ghost"
            href="/translate/"
            className={layoutLinkClassnames}
          >
            <TbLanguage />
            <span>Ai Translate</span>
          </CanvasLink>
          <CanvasLink
            variant="ghost"
            href="/grammar-check/"
            className={layoutLinkClassnames}
          >
            <TbBrandGoogle />
            <span>Ai Grammar Check</span>
          </CanvasLink>

          <div className="relative">
            <CanvasButton
              variant="ghost"
              onClick={() => setShowOtherMenu(!showOtherMenu)}
              className={
                showOtherMenu
                  ? "border border-black rounded-md"
                  : layoutLinkClassnames
              }
            >
              <TbArrowAutofitDown />
              <span>Other Ai Tools</span>
            </CanvasButton>

            <div
              className={cn(
                "absolute left-0 z-50 bg-white border border-black rounded-md top-10 hidden",
                showOtherMenu ? "block" : ""
              )}
            >
              <CanvasLink
                variant="ghost"
                href="/image-to-text"
                className={layoutLinkClassnames}
              >
                <TbPhotoAi />
                <span>Image to Text</span>
              </CanvasLink>
              <CanvasLink
                variant="ghost"
                href="/text-to-speech"
                className={layoutLinkClassnames}
              >
                <TbSpeakerphone />
                <span>Text to Speech</span>
              </CanvasLink>
            </div>
          </div>

          <div className="relative">
            <CanvasButton
              variant="ghost"
              onClick={() => setShowStudentMenu(!showStudentMenu)}
              className={
                showStudentMenu
                  ? "border border-black rounded-md"
                  : layoutLinkClassnames
              }
            >
              <PiStudentDuotone className="text-lg" />
              <span>For Students</span>
            </CanvasButton>

            <div
              className={cn(
                "absolute left-0 z-50 bg-white border border-black rounded-md top-10 hidden",
                showStudentMenu ? "block" : ""
              )}
            >
              <CanvasLink
                variant="ghost"
                href="/image-to-text"
                className={layoutLinkClassnames}
              >
                <PiStudentDuotone className="text-lg" />
                <span>Student Promo</span>
              </CanvasLink>
              <CanvasLink
                variant="ghost"
                href="/plans/students"
                className={layoutLinkClassnames}
              >
                <FaRupiahSign className="text-lg" />
                <span>Student Pricing</span>
              </CanvasLink>
            </div>
          </div>

          <CanvasLink
            variant="ghost"
            href="/plans/"
            className={layoutLinkClassnames}
          >
            <FaRupiahSign />
            <span>Pricing</span>
          </CanvasLink>
          <CanvasLink
            variant="ghost"
            href="/support/"
            className={layoutLinkClassnames}
          >
            <TbHelpCircle />
            <span>Help and Support</span>
          </CanvasLink>
        </div>
      </div>

      {isLogin ? (
        <CanvasLink href="/account" variant="default">
          <TbUserCircle />
          <span>Account</span>
        </CanvasLink>
      ) : (
        <div className="flex items-center gap-4">
          <CanvasLink
            href="/login/"
            variant="ghost"
            className={layoutLinkClassnames}
          >
            Login
          </CanvasLink>
          <CanvasLink href="/login/" variant="default" className="gap-2">
            <span className="font-bold">Get LanguageAI</span>
            <span>It&apos;s Free</span>
          </CanvasLink>
        </div>
      )}
    </div>
  );
};

export default HeaderDesktop;
