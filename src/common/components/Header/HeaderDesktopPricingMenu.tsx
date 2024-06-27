import { memo } from "react";
import Image from "next/image";
import { FaMoneyBills } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";
import { TbCalendarDollar, TbX } from "react-icons/tb";
import Modal from "../Modal";
import NextButton from "../NextButton";
import NextLink from "../NextLink";

interface HeaderDesktopPricingMenuProps {
  onCloseClick: () => void;
}

const HeaderDesktopPricingMenu = (props: HeaderDesktopPricingMenuProps) => {
  const { onCloseClick } = props;
  return (
    <Modal>
      <div className="w-2/3 mx-auto bg-white rounded-lg mt-[10%] relative p-4">
        <NextButton
          onClick={onCloseClick}
          className="absolute p-1 text-2xl border-transparent right-2 top-2"
          variant="outline"
        >
          <TbX />
        </NextButton>

        <Image
          src="/images/languageai/languageai_black.png"
          alt="languageai.id"
          width={200}
          height={130}
          className="mx-auto mb-2 "
        />
        <div className="mb-8 text-2xl text-center">
          Which pricing suits your needs?
        </div>
        <div className="grid grid-cols-3 gap-2">
          <NextLink
            href={"/plans"}
            onClick={onCloseClick}
            className="justify-start gap-4"
          >
            <FaMoneyBills className="text-3xl" />
            <div>
              <div className="text-xl ">See All Pricing</div>
              <div>See pricing overview and comparison</div>
            </div>
          </NextLink>
          <NextLink
            href={"/plans/students"}
            onClick={onCloseClick}
            className="relative justify-start gap-4 overflow-hidden"
          >
            <div className="absolute w-1/3 py-1 text-xs font-bold text-center text-red-500 rotate-45 bg-yellow-200 top-4 -right-8 h-fit">
              FREE
            </div>
            <PiStudentDuotone className="text-3xl" />
            <div>
              <div className="text-xl ">Student</div>
              <div>I am a student and I want it free</div>
            </div>
          </NextLink>
          <NextLink
            href={"/plans/premium"}
            onClick={onCloseClick}
            className="relative justify-start gap-4 overflow-hidden"
          >
            <div className="absolute w-1/3 py-1 text-xs font-bold text-center text-red-500 rotate-45 bg-yellow-200 top-4 -right-8 h-fit">
              Popular
            </div>
            <TbCalendarDollar className="text-3xl" />
            <div>
              <div className="text-xl ">Subscription</div>
              <div>I want to pay monthly or yearly</div>
            </div>
          </NextLink>
        </div>
      </div>
    </Modal>
  );
};

export default memo(HeaderDesktopPricingMenu);
