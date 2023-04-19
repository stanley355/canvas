import React from "react";
import { GetStaticProps } from "next";
import classNames from "classnames";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import MetaSEO from "@/common/components/MetaSEO";
import HomeHero from "@/modules/home/HomeHero";
import PackageJSON from "../../package.json";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = (props: any) => {
  const { seo } = props;

  const HomeTitle = () => (
    <div className="py-2">
      <h3 className="text-2xl">Introducing LangAI {PackageJSON.version}</h3>
      <div className="text-lg">
        The most advanced language and text processing system
      </div>
    </div>
  );

  return (
    <div>
      <MetaSEO seo={seo} />
      <Header />
      <main className={classNames("h-screen", inter.className)}>
        <HomeHero />
        <div className="container mx-auto px-2">
          <HomeTitle />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
