import { memo } from "react"
import Image from "next/image"
import { FaMoneyBills } from "react-icons/fa6"
import { PiStudentDuotone } from "react-icons/pi"
import { TbCalendarDollar, TbWalk, TbX } from "react-icons/tb"
import CanvasLink from "../ui/CanvasLink"
import CanvasButton from "../ui/CanvasButton"
import styles from './header.module.scss';
import { cn } from "@/common/lib/cn"

interface HeaderDesktopPricingMenuProps {
  onCloseClick: () => void
}


const HeaderDesktopPricingMenu = (props: HeaderDesktopPricingMenuProps) => {
  const { onCloseClick } = props;
  return (
    <div className="fixed top-0 left-0 bg-[#00000055] w-full h-full z-50">

      <div className="w-1/2 mx-auto bg-white border border-black rounded-md mt-[10%] relative py-4 px-2">
        <CanvasButton
          onClick={onCloseClick}
          className="absolute text-2xl text-gray-500 border border-transparent right-2 top-2 hover:border-black hover:rounded-md" variant="none" >
          <TbX />
        </CanvasButton>

        <Image
          src="/images/languageai/languageai_black.png"
          alt="languageai.id"
          width={200}
          height={130}
          className="mx-auto mb-2 "
        />
        <div className="mb-8 text-2xl text-center">Which pricing suits your needs?</div>
        <div className="grid grid-cols-2 gap-2">
          <CanvasLink href={"/plans"} variant="ghost"
            onClick={onCloseClick}
            className="justify-start gap-4 text-white border border-transparent rounded-lg bg-emerald-800 hover:border-black hover:bg-white hover:text-black">
            <FaMoneyBills className="text-3xl" />
            <div>
              <div className="text-xl ">See All Pricing</div>
              <div>See pricing overview and comparison</div>
            </div>
          </CanvasLink>
          <CanvasLink href={"/plans"} variant="ghost"
            onClick={onCloseClick}
            className="relative justify-start gap-4 overflow-hidden text-white border border-transparent rounded-lg bg-emerald-800 hover:border-black hover:bg-white hover:text-black">
            <div className="absolute w-1/3 py-1 text-xs font-bold text-center text-red-500 rotate-45 bg-yellow-200 top-4 -right-8 h-fit">
              FREE
            </div>
            <PiStudentDuotone className="text-3xl" />
            <div>
              <div className="text-xl ">Student</div>
              <div>I am a student and I want it free</div>
            </div>
          </CanvasLink>
          <CanvasLink href={"/plans"} variant="ghost"
            onClick={onCloseClick}
            className="relative justify-start gap-4 overflow-hidden text-white border border-transparent rounded-lg bg-emerald-800 hover:border-black hover:bg-white hover:text-black">
            <div className="absolute w-1/3 py-1 text-xs font-bold text-center text-red-500 rotate-45 bg-yellow-200 top-4 -right-8 h-fit">
              #1 Popular
            </div>
            <TbCalendarDollar className="text-3xl" />
            <div>
              <div className="text-xl ">Subscription</div>
              <div>I want to pay monthly or yearly</div>
            </div>
          </CanvasLink>
          <CanvasLink href={"/plans"} variant="ghost"
            onClick={onCloseClick}
            className="relative justify-start gap-4 overflow-hidden text-white bg-blue-800 border border-transparent rounded-lg hover:border-black hover:bg-white hover:text-black">
            <div className="absolute w-1/3 py-1 text-xs font-bold text-center text-red-500 rotate-45 bg-yellow-200 top-4 -right-8 h-fit">
              #2 Popular
            </div>
            <TbWalk className="text-3xl" />
            <div>
              <div className="text-xl ">Pay as You Go</div>
              <div>I only want to pay for what I use</div>
            </div>
          </CanvasLink>
        </div>
      </div>
    </div>
  )
}

export default memo(HeaderDesktopPricingMenu)