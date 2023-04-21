import React from "react";
import { GetStaticProps } from "next";
import MetaSEO from "@/common/components/MetaSEO";
import HomeHero from "@/modules/home/HomeHero";
import Layout from "@/common/components/Layout";
import Button from "@/common/components/Button";
import TranslateComparison from "@/modules/translate/components/TranslateComparison";
import PackageJSON from "../../package.json";

const Home = () => {
  const seo = {
    title: "LanguageAI - The most advanced language and text processing system",
    description:
      "LanguageAI - The cutting-edge language and words processing system that's replacing Gooogle Translate. Discover how our advanced technology is revolutionizing language analysis today.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  const HomeTitle = () => (
    <div className="p-2 lg:py-8">
      <h3 className="text-3xl">Introducing LanguageAI {PackageJSON.version}</h3>
      <div className="text-lg">
        The most advanced language and text processing system
      </div>
    </div>
  );

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <HomeHero />
      <div className="container mx-auto">
        <HomeTitle />
        <h3 className="px-2 mb-4 text-4xl text-center">Not Just English, but World Languages!</h3>
        <ul className="p-2 border border-white border-x-0 list-disc lg:grid lg:grid-cols-4 lg:gap-2 lg:py-4 lg:text-lg">
          <li className="ml-4 mb-4">
            <div className="mb-2">
              Having Trouble with Meaningful Translation?{" "}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="link"
                href="/translate/"
                title="Try AI Translate"
                wrapperClassName="border border-white p-1 text-center hover:bg-white hover:text-black"
              />
              <Button
                type="link"
                href="/translate/#translate_comparison"
                title="See Docs"
                wrapperClassName="border border-white p-1 text-center hover:bg-white hover:text-black"
              />
            </div>
          </li>
          <li className="ml-4 mb-4">
            <div>Having Trouble Reviewing your Writing?</div>
            <div className="underline">Coming Soon</div>
          </li>
          <li className="ml-4 mb-4">
            <div>Having Trouble in Paraphrasing/Concluding?</div>
            <div className="underline">Coming Soon</div>
          </li>
          <li className="ml-4 mb-4">
            <div>Having Trouble in Word Meaning/Synonym?</div>
            <div className="underline">Coming Soon</div>
          </li>
        </ul>
        <div className="px-2 mb-8 flex flex-col items-center justify-center">
          <TranslateComparison />
          <div className="my-16">
            <Button
              type="link"
              title="Let's translate"
              href="/translate/"
              buttonClassName="p-2 bg-white border mx-auto text-black hover:bg-black hover:text-white text-xl font-semibold"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
