import Link from "next/link";
import {
  TbBrain,
  TbLanguage,
  TbLanguageHiragana,
  TbMicrophone,
  TbSpeakerphone,
  TbTextCaption,
  TbTextGrammar,
} from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";

import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";

const HomeFeatures = () => {
  return (
    <section className="h-screen px-4 py-8 lg:px-0 bg-[url('/images/home/features_bg.jpg')] bg-cover bg-fixed bg-center ">
      <div className="container">
        <h3 className="mb-8 text-3xl font-semibold text-transparent lg:mb-12 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
          Explore what you can do with our AI
        </h3>
        <div className="grid gap-8 text-xl lg:gap-12 lg:grid-cols-2 lg:text-2xl">
          <Link
            href="/checkbot"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_suggestion)
            }
            className="flex items-center gap-4 text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text hover:from-blue-700 hover:via-blue-500 hover:to-blue-400"
          >
            <TbTextGrammar className="text-blue-700 " />
            <span>Check grammar and spelling</span>
          </Link>
          <Link
            href="/checkbot"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_suggestion)
            }
            className="flex items-center gap-4 text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text hover:from-blue-700 hover:via-blue-500 hover:to-blue-400"
          >
            <TfiWrite className="text-blue-700 " />
            <span>Paraphrasing</span>
          </Link>
          <Link
            href="/checkbot"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_suggestion)
            }
            className="items-center hidden gap-4 text-transparent lg:flex bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text hover:from-blue-700 hover:via-blue-500 hover:to-blue-400"
          >
            <TbBrain className="text-blue-700 " />
            <span>Brainstorming</span>
          </Link>
          <Link
            href="/checkbot"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_suggestion)
            }
            className="items-center hidden gap-4 text-transparent lg:flex bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text hover:from-blue-700 hover:via-blue-500 hover:to-blue-400"
          >
            <TbTextCaption className="text-blue-700 " />
            <span>Summarization</span>
          </Link>
          <Link
            href="/translate"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_suggestion)
            }
            className="flex items-center gap-4 text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text hover:from-blue-700 hover:via-blue-500 hover:to-blue-400"
          >
            <TbLanguage className="text-blue-700 " />
            <span>Translation</span>
          </Link>
          <Link
            href="/translate/audio"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_suggestion)
            }
            className="flex items-center gap-4 text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text hover:from-blue-700 hover:via-blue-500 hover:to-blue-400"
          >
            <TbLanguageHiragana className="text-blue-700 " />
            <span>Audio Translation</span>
          </Link>
          <Link
            href="/text-to-speech"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_suggestion)
            }
            className="flex items-center gap-4 text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text hover:from-blue-700 hover:via-blue-500 hover:to-blue-400"
          >
            <TbSpeakerphone className="text-blue-700 " />
            <span>Text to Speech Conversion</span>
          </Link>
          <Link
            href="/speech-to-text"
            onClick={() =>
              sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_suggestion)
            }
            className="flex items-center gap-4 text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text hover:from-blue-700 hover:via-blue-500 hover:to-blue-400"
          >
            <TbMicrophone className="text-blue-700 " />
            <span>Speech to Text Conversion</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
