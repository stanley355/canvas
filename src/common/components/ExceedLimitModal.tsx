import Image from "next/image"
import { TbAnalyze, TbExclamationCircle } from "react-icons/tb"
import { useRouter } from "next/router"
import { Button } from "./ui/button"

interface IExceedLimitModal {
  onCloseClick: () => void;
}

const ExceedLimitModal = (props: IExceedLimitModal) => {
  const { onCloseClick } = props;
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50 px-4">
      <div className="mt-[5%] bg-white rounded-md lg:w-1/4 lg:mx-auto">
        <Image src="/images/exceed_limit.png" width={350} height={400} alt="LanguageAi Limit" className="rounded-t-md" />
        <div className="p-4">
          <div className="flex items-center justify-center gap-1 text-lg font-semibold">
            <TbExclamationCircle className="text-xl" />
            <span>You run out of Monthly Limit</span>
          </div>
          <div className="mb-4 text-center text-gray-500">Upgrade your account to enjoy unlimited usage</div>

          <Button
            onClick={() => router.push("/plans/")}
            className="w-full gap-2 mb-2 text-lg bg-emerald-800 hover:bg-emerald-700">
            <TbAnalyze />
            <span>See Plans</span>
          </Button>
          <Button variant={'ghost'}
            onClick={onCloseClick}
            className="w-full">
            Later
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ExceedLimitModal