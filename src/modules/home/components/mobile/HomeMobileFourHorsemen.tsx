import CanvasLink from "@/common/components/ui/CanvasLink"
import { FaRobot } from "react-icons/fa6"
import { TbLanguage } from "react-icons/tb"

const HomeMobileFourHorsemen = () => {
  return (
    <>
      <CanvasLink href={'/translate/'} className="gap-2 mb-4 text-black bg-white border-black rounded-lg">
        <TbLanguage className="w-2/3 text-8xl" />
        <div>
          <div className="text-lg font-semibold text-blue-800">Ai Translate</div>
          <div>
            Tired of word by word translation tools? Our AI understands your context and process it pragmatically
          </div>
        </div>
      </CanvasLink>

      <CanvasLink href={'/checkbot/'} className="gap-2 p-4 mb-4 text-black bg-white border-black rounded-lg">
        <div>
          <div className="text-lg font-semibold text-blue-800">Ai Checkbot</div>
          <div>
            Check your writing beyond English! Use it for Indonesian, Chinese, Korean, and more!
          </div>
        </div>
        <FaRobot className="w-2/3 text-6xl" />
      </CanvasLink>
    </>
  )
}

export default HomeMobileFourHorsemen