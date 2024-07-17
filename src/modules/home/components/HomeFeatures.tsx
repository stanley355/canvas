import Image from "next/image";
import { FaRobot } from "react-icons/fa6";
import { TbLanguage, TbMicrophone, TbSpeakerphone } from "react-icons/tb";

import NextLink from "@/common/components/NextLink";

const HomeFeatures = () => {
  return (
    <section
      className="bg-brand-primary text-white pb-8 pt-16 lg:pt-8 px-4 lg:px-0"
      id="home_features"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4 px-4 lg:px-0">
          One AI for language and writing
        </h2>
        <h3 className="text-xl text-center mb-16">
          Applicable for &gt; 50 languages
        </h3>

        <NextLink
          href="/translate"
          variant="none"
          className="lg:grid grid-cols-2 gap-8 place-items-center"
        >
          <div className="h-[40vh] relative mb-8">
            <Image
              src="/images/home/translate1.png"
              alt="Languageai AI Translate 1"
              width={400}
              height={400}
              className="w-4/5 h-2/3 rounded-lg"
            />
            <Image
              src="/images/home/translate2.png"
              alt="Languageai AI Translate 2"
              width={400}
              height={400}
              className="w-4/5 h-2/3 absolute right-0 bottom-0 rounded-lg"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-xl gap-1 flex items-center mb-4 border-b w-fit">
              <TbLanguage />
              AI Translate
            </h3>
            <span>
              Tired of word by word translation? Our AI Translate understands
              your text and translates contextually
            </span>
          </div>
        </NextLink>

        <NextLink
          href="/checkbot"
          variant="none"
          className="lg:grid grid-cols-2 gap-8 place-items-center mt-16"
        >
          <div className="h-[40vh] relative mb-8">
            <Image
              src="/images/home/checkbot1.png"
              alt="Languageai AI Checkbot 1"
              width={400}
              height={400}
              className="w-4/5 h-2/3 rounded-lg"
            />
            <Image
              src="/images/home/checkbot2.png"
              alt="Languageai AI Checkbot 2"
              width={400}
              height={400}
              className="w-4/5 h-2/3 absolute right-0 bottom-0 rounded-lg"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-xl gap-1 flex items-center mb-4 border-b w-fit">
              <FaRobot />
              AI Checkbot
            </h3>
            <span>
              Fix your writing easily. Check grammar and spelling, analyse
              strength and weakness, provide suggestions, and paraphrase in one
              click.
            </span>
          </div>
        </NextLink>

        <NextLink
          href="/text-to-speech"
          variant="none"
          className="lg:grid grid-cols-2 gap-8 place-items-center mt-16"
        >
          <div className="h-[40vh] relative mb-8 lg:grid grid-cols-2 gap-8 w-full">
            <Image
              src="/images/home/tts1.png"
              alt="Languageai AI Text to speech 1"
              width={400}
              height={400}
              className="lg:h-full rounded-lg w-4/5 h-2/3 lg:w-full"
            />
            <Image
              src="/images/home/tts2.png"
              alt="Languageai AI Text to Speech 2"
              width={400}
              height={400}
              className="lg:h-full rounded-lg w-4/5 h-2/3 lg:w-full absolute right-0 bottom-0 lg:relative"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-xl gap-1 flex items-center mb-4 border-b w-fit">
              <TbSpeakerphone />
              AI Text to Speech
            </h3>
            <span>
              A free text-to-speech tool and an online text reader that supports
              50+ languages. You can listen online, or download audio files in
              mp3 format
            </span>
          </div>
        </NextLink>

        <NextLink
          href="/speech-to-text/"
          className="lg:grid grid-cols-2 gap-8 place-items-center mt-16"
          variant="none"
        >
          <div className="h-[40vh] relative mb-8 w-full lg:grid grid-cols-2 gap-8 ">
            <Image
              src="/images/home/stt1.png"
              alt="Languageai AI Speech to Text 1"
              width={400}
              height={400}
              className="lg:h-full rounded-lg w-4/5 h-2/3 lg:w-full border border-brand-primary"
            />
            <Image
              src="/images/home/stt2.png"
              alt="Languageai AI Speech to Text 2"
              width={400}
              height={400}
              className="lg:h-full rounded-lg w-4/5 h-2/3 lg:w-full absolute right-0 bottom-0 lg:relative border border-brand-primary"
            />
          </div>
          <div className="mb-16">
            <h3 className="text-xl gap-1 flex items-center mb-4 border-b w-fit">
              <TbMicrophone />
              AI Speech to Text
            </h3>
            <span>
              Convert voice to text in over 50 languages and variants using
              languageai. Get your detailed analysis of converted transcription!{" "}
            </span>
          </div>
        </NextLink>
      </div>
    </section>
  );
};

export default HomeFeatures;
