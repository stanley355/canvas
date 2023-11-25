import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLanguage, FaRobot } from "react-icons/fa";

import { HOME_SEO } from "@/modules/home/lib/constant";
import MetaSEO from "@/common/components/MetaSEO";
import { PlansSection } from "./plans";

const Home = () => {
  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-blue-100 to-white">
        <div className="container mx-auto p-4 mb-8">
          <h1 className="text-center flex items-center justify-center text-4xl mb-4 text-black mt-8">
            <span>Language</span>
            <Image
              src="/images/languageai.png"
              alt="Language AI"
              width={50}
              height={50}
            />
          </h1>
          <div className="text-2xl text-center mb-16 text-black">
            High Quality Translation and Grammar Check
          </div>

          <div className="lg:flex lg:items-center lg:justify-evenly">
            <div className="bg-white text-black rounded-lg p-4 mb-16 lg:mb-0 lg:w-[400px]">
              <div className="flex items-center justify-center gap-2 text-2xl lg:text-3xl">
                <FaLanguage className="text-4xl" />
                <div>AI Translate</div>
              </div>
              <div className="text-center mb-8 lg:text-lg">
                Translate words, phrases, and entire documents over 100
                languages
              </div>
              <Link
                href="/translate"
                className="w-full block bg-blue-500 text-white rounded-md p-2 text-center font-bold lg:text-lg"
              >
                Translate
              </Link>
            </div>
            <div className="bg-white text-black rounded-lg p-4 lg:w-[400px]">
              <div className="flex items-center justify-center gap-2 text-2xl lg:text-3xl">
                <FaRobot className="text-4xl" />
                <div>AI Checkbot</div>
              </div>
              <div className="text-center mb-8 lg:text-lg">
                Correct grammar, spelling, and wording errors in over 100
                languages
              </div>
              <Link
                href="/checkbot"
                className="w-full block bg-blue-500 text-white rounded-md p-2 text-center font-bold lg:text-lg"
              >
                Check
              </Link>
            </div>
          </div>
        </div>
        <PlansSection />
      </div>
    </div>
  );
};

export default Home;
