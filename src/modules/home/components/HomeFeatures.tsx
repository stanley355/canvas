import { useRouter } from "next/router";
import Image from "next/image";
import { FaRobot } from "react-icons/fa6";
import { TbLanguage, TbMicrophone, TbSpeakerphone } from "react-icons/tb";

import NextButton from "@/common/components/NextButton";
import NextLink from "@/common/components/NextLink";

const HomeFeatures = () => {
  const router = useRouter();

  return (
    <div
      className="bg-brand-primary text-white pb-8 pt-16 lg:pt-8 px-4 lg:px-0"
      id="home_features"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4 px-4 lg:px-0">
          One AI for language and writing
        </h2>
        <h3 className="text-xl text-center">
          Applicable for &gt; 50 languages
        </h3>

        <div
          id="home_translate"
          className="lg:grid grid-cols-2 gap-8 place-items-center mb-16"
        >
          <NextButton
            className="h-[40vh] relative mb-8"
            variant="none"
            onClick={() => router.push("/translate")}
          >
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
          </NextButton>
          <div>
            <NextLink
              href="/translate"
              className="text-xl gap-1 flex items-center mb-4 border-b w-fit"
              variant="none"
            >
              <TbLanguage />
              AI Translate
            </NextLink>
            <div>
              Tired of word by word translation? Our AI Translate understands
              your text and translates contextually
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-8 place-items-center mb-16">
          <NextButton
            onClick={() => router.push("/checkbot")}
            variant="none"
            className="h-[40vh] relative mb-8"
          >
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
          </NextButton>
          <div>
            <NextLink
              href="/checkbot"
              className="text-xl gap-1 flex items-center mb-4 border-b w-fit"
              variant="none"
            >
              <FaRobot />
              AI Checkbot
            </NextLink>
            <div>
              Fix your writing easily. Check grammar and spelling, analyse
              strength and weakness, provide suggestions, and paraphrase in one
              click.
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-8 place-items-center mb-16">
          <NextButton
            onClick={() => router.push("/text-to-speech/")}
            variant="none"
            className="h-[40vh] relative mb-8 lg:grid grid-cols-2 gap-8 w-full"
          >
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
          </NextButton>
          <div>
            <NextLink
              href="/text-to-speech"
              className="text-xl gap-1 flex items-center mb-4 border-b w-fit"
              variant="none"
            >
              <TbSpeakerphone />
              AI Text to Speech
            </NextLink>
            <div>
              A free text-to-speech tool and an online text reader that supports
              50+ languages. You can listen online, or download audio files in
              mp3 format
            </div>
          </div>
        </div>

        <section className="lg:grid grid-cols-2 gap-8 place-items-center">
          <NextButton
            onClick={() => router.push("/speech-to-text/")}
            variant="none"
            className="h-[40vh] relative mb-8 w-full lg:grid grid-cols-2 gap-8 "
          >
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
          </NextButton>
          <div>
            <NextLink
              href="/speech-to-text/"
              className="text-xl gap-1 flex items-center mb-4 border-b w-fit"
              variant="none"
            >
              <TbMicrophone />
              AI Speech to Text
            </NextLink>
            <div>
              Convert voice to text in over 50 languages and variants using
              languageai. Get your detailed analysis of converted transcription!{" "}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeFeatures;
