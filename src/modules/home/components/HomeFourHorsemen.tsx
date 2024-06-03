import { FaRobot } from "react-icons/fa6";
import { TbLanguage, TbPhotoAi, TbSpeakerphone } from "react-icons/tb";
import CanvasLink from "@/common/components/ui/CanvasLink";

const HomeFourHorsemen = () => {
  return (
    <div className="px-4 mb-8 lg:grid lg:grid-cols-4 lg:gap-4 lg:container">
      <CanvasLink
        href={"/checkbot/"}
        className="gap-2 p-4 mb-4 text-black bg-white border-black rounded-lg"
      >
        <FaRobot className="w-2/3 text-6xl" />
        <div>
          <div className="text-lg font-semibold text-blue-800">Ai Checkbot</div>
          <div>
            Check your grammar and writing beyond English! Use it for
            Indonesian, Chinese, and more!
          </div>
        </div>
      </CanvasLink>
      <CanvasLink
        href={"/translate/"}
        className="gap-2 mb-4 text-black bg-white border-black rounded-lg"
      >
        <TbLanguage className="hidden w-2/3 text-7xl lg:block" />
        <div>
          <div className="text-lg font-semibold text-blue-800">
            Ai Translate
          </div>
          <div>
            Tired of word by word translation tools? Our AI understands your
            context and process it pragmatically
          </div>
        </div>
        <TbLanguage className="w-2/3 text-7xl lg:hidden" />
      </CanvasLink>

      <CanvasLink
        href={"/image-to-text/"}
        className="gap-2 mb-4 text-black bg-white border-black rounded-lg"
      >
        <TbPhotoAi className="w-2/3 text-6xl" />
        <div>
          <div className="text-lg font-semibold text-blue-800">
            Ai Image to Text
          </div>
          <div>
            Extract words from images instantly. Upload and sit back, the texts
            will appear in seconds.
          </div>
        </div>
      </CanvasLink>

      <CanvasLink
        href={"/text-to-speech/"}
        className="gap-2 mb-4 text-black bg-white border-black rounded-lg"
      >
        <TbSpeakerphone className="hidden w-2/3 text-6xl lg:block" />
        <div>
          <div className="text-lg font-semibold text-blue-800">
            Ai Text to Speech
          </div>
          <div>
            Listen to the music. Place your text and let our Ai speak for you.
            This Ai speaks in many languages.
          </div>
        </div>
        <TbSpeakerphone className="w-2/3 text-6xl lg:hidden" />
      </CanvasLink>
    </div>
  );
};

export default HomeFourHorsemen;
