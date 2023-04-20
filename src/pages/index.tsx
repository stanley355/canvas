import React from "react";
import { GetStaticProps } from "next";
import MetaSEO from "@/common/components/MetaSEO";
import HomeHero from "@/modules/home/HomeHero";
import Layout from "@/common/components/Layout";
import PackageJSON from "../../package.json";

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
    <Layout>
      <MetaSEO seo={seo} />
      <HomeHero />
      <div className="container mx-auto px-2">
        <HomeTitle />
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
