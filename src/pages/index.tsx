import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLanguage, FaRobot } from "react-icons/fa";

import { HOME_SEO } from "@/modules/home/lib/constant";
import MetaSEO from "@/common/components/MetaSEO";
import HomeProducts from "@/modules/home/components/HomeProducts";
import HomeVideo from "@/modules/home/components/HomeVideo";

const Home = () => {
  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-slate-100 to-white">
        <div className="container p-4 mx-auto">
          <h1 className="flex items-center justify-center mt-8 mb-2 text-4xl font-bold text-center">
            <span>Language</span>
            <Image
              src="/images/languageai.png"
              alt="Language AI"
              width={50}
              height={50}
            />
          </h1>
          <div className="mb-8 text-2xl text-center text-black">
            How can AI help you?
          </div>
          <HomeProducts />
          <HomeVideo />
        </div>
      </div>
    </div>
  );
};

export default Home;
