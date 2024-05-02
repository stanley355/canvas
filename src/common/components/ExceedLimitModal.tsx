import Image from "next/image";
import {
  TbAnalyze,
  TbArrowRight,
  TbCheck,
  TbExclamationCircle,
} from "react-icons/tb";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import CanvasButton from "./ui/CanvasButton";

interface IExceedLimitModal {
  onCloseClick: () => void;
}

const ExceedLimitModal = (props: IExceedLimitModal) => {
  const { onCloseClick } = props;
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50 px-4">
      <div className="mt-[25%] lg:mt-[10%] bg-white rounded-md lg:w-[325px] lg:mx-auto">
        <Image
          src="/images/exceed_limit.png"
          width={350}
          height={400}
          alt="LanguageAi Limit"
          className="w-full h-auto rounded-t-md"
        />
        <div className="p-4">
          <div className="flex items-center justify-center gap-1 text-lg font-semibold">
            <TbExclamationCircle className="text-2xl" />
            <span className="text-xl">You run out of Monthly Limit</span>
          </div>
          <div className="mb-4 text-center text-gray-500">
            Upgrade Premium to enjoy unlimited usage
          </div>

          <CanvasButton
            variant="primary"
            className="w-full mb-4 text-md"
            onClick={() => router.push("/plans/")}
          >
            <span>Check Premium</span>
            <TbArrowRight className="animate-bounce" />
          </CanvasButton>
          <CanvasButton
            variant="ghost"
            className="w-full border border-transparent rounded-md text-md hover:border-emerald-800"
            onClick={onCloseClick}
          >
            Later
          </CanvasButton>
        </div>
      </div>
    </div>
  );
};

export default ExceedLimitModal;
