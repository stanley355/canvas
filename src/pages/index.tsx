import React from "react";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import HomeHero from "@/modules/home/components/HomeHero";
import { HOME_SEO } from "@/modules/home/lib/constant";
import HomeCopywriting from "@/modules/home/components/HomeCopywriting";
import { HEADER_MENU } from "@/common/components/Header/constant";
import Button from "@/common/components/Button";

const Home = () => {

  const SOLUTIONS = [HEADER_MENU[0], HEADER_MENU[3], HEADER_MENU[5]];

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <HomeHero />
      <HomeCopywriting />
      <div className="bg-gradient-to-t from-blue-900 via-blue-500 to-white text-black lg:pt-16 pb-12">
        <div className="text-center text-3xl p-4 mb-4 lg:mb-16">
          The Solution That Suits Your Needs
        </div>
        <div className="lg:container mx-auto lg:grid lg:grid-cols-3 lg:gap-4 px-4">
          {SOLUTIONS.map((solution) => <div className="bg-white rounded-md mb-4 p-4 bg-gradient-to-br from-blue-500 via-white to-white h-80">
            <div className="flex items-center text-3xl lg:mx-auto gap-2 mb-4">
              <span>{solution.icon}</span>
              <span>{solution.title}</span>
            </div>
            <ul className="list-disc ml-4 text-xl">
              {solution?.desc.map(sol => <li>{sol}</li>)}
            </ul>
            <Button type="link" href={solution.url} title="Get Started"
              wrapperClassName="w-fit text-xl p-2 rounded mx-auto mt-16 shadow shadow-gray-500 bg-gradient-to-r from-indigo-500 to-white hover:from-blue-500"
              buttonClassName="w-full h-full" />
          </div>)}
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-900 via-blue-500 to-white h-screen">
        <div className="container">

          <div>
            Frequently Asked Questions
          </div>
          <div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
