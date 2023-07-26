import React from "react";
import Image from "next/image";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeServices from "@/modules/home/components/HomeServices";
import HomeFeaturedIn from "@/modules/home/components/HomeFeaturedIn";
import HomeStatistic from "@/modules/home/components/HomeStatistic";
import LoginForm from "@/modules/login/components/LoginForm";
import { HOME_SEO } from "@/modules/home/lib/constant";
import ReferralPromo from "@/common/components/ReferralPromo";
import ProfileNews from "@/modules/profile/components/News";

const Home = () => {
  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <HomeHero />
      <div className="bg-white h-screen">
        <div className="container mx-auto p-4 text-black lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="mb-4">
            <div className=" font-semibold text-4xl lg:text-6xl mb-4">
              Effortless translations and flawless grammar
            </div>
            <div className="lg:text-2xl">
              Welcome to the future of language assistance! We develop cutting-edge translation tools and grammar checks, making communication simple, efficient, and enjoyable.
            </div>
          </div>
          <Image src="/images/home/home_translate.jpeg" alt="Translation and Grammar Check" width={400} height={400} className="w-full h-auto rounded-md" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
