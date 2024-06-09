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

import CanvasLink from "../ui/CanvasLink";
import CanvasButton from "../ui/CanvasButton";
import { cn } from "@/common/lib/cn";
import { PiStudent, PiStudentBold, PiStudentDuotone } from "react-icons/pi";
import { FaRobot, FaRupiahSign } from "react-icons/fa6";
import HeaderDesktopPricingMenu from "./HeaderDesktopPricingMenu";

interface IHeaderDesktop {
  isLogin: boolean;
}

const HeaderDesktop = (props: IHeaderDesktop) => {
  const { isLogin } = props;
  const [showPricingMenu, setShowPricingMenu] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <Link href="/" >
        <Image
          src="/images/languageai/languageai_black.png"
          alt="languageai.id"
          width={150}
          height={65}
        />
      </Link>

      <div className="flex border rounded-full">
        <CanvasLink href="/checkbot/" variant="none" className="flex items-center gap-2 p-2 px-4 border border-transparent rounded-full hover:border-black">
          <FaRobot />
          <span>Checkbot</span>
        </CanvasLink>
        <CanvasLink href="/translate/" variant="none" className="flex items-center gap-2 p-2 px-4 border border-transparent rounded-full hover:border-black">
          <TbLanguage />
          <span>Translate</span>
        </CanvasLink>
        <CanvasLink href="/image-to-text/" variant="none" className="flex items-center gap-2 p-2 px-4 border border-transparent rounded-full hover:border-black">
          <TbPhotoAi />
          <span>Image to Text</span>
        </CanvasLink>
        <CanvasLink href="/text-to-speech/" variant="none" className="flex items-center gap-2 p-2 px-4 border border-transparent rounded-full hover:border-black">
          <TbSpeakerphone />
          <span>Text to Speech</span>
        </CanvasLink>
      </div>


      <div className="relative flex gap-2">
        {showPricingMenu && <HeaderDesktopPricingMenu onCloseClick={() => setShowPricingMenu(false)} />}
        <CanvasButton variant="ghost"
          onClick={() => setShowPricingMenu(true)}
          className="items-center border border-transparent hover:border-black ">
          <span>Pricing</span>
          <TbChevronDown />
        </CanvasButton>
        {isLogin ?
          <CanvasLink href="/account">
            <TbUserCircle />
            <span>ACCOUNT</span>
          </CanvasLink> :
          <CanvasLink href={'/login'}>
            <span>SIGN IN</span>
            <TbArrowBarToRight />
          </CanvasLink>
        }
      </div>
    </div>
  );
};

export default HeaderDesktop;
