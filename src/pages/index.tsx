import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLanguage, FaRobot } from "react-icons/fa";

import { HOME_SEO } from "@/modules/home/lib/constant";
import MetaSEO from "@/common/components/MetaSEO";
import PlanList from "@/modules/plans/components/PlanList";
import HomeProducts from "@/modules/home/components/HomeProducts";

const Home = () => {
  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-gradient-to-br from-white via-slate-100 to-white lg:h-[90vh]">
        <div className="container mx-auto p-4">
          <h1 className="text-center flex items-center justify-center text-4xl mb-2 mt-8 font-bold">
            <span>Language</span>
            <Image
              src="/images/languageai.png"
              alt="Language AI"
              width={50}
              height={50}
            />
          </h1>
          <div className="text-2xl text-center mb-8 text-black">
            How can AI help you?
          </div>
          <HomeProducts />
          <PlanList />
        </div>
      </div>
    </div>
  );
};

export default Home;
