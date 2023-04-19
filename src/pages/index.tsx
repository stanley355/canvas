import React from "react";
import { GetStaticProps } from "next";
import classNames from "classnames";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import MetaSEO from "@/common/components/MetaSEO";
import PackageJSON from '../../package.json';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = (props: any) => {
  const { seo } = props;

  return (
    <div>
        <MetaSEO seo={seo} />
      <Header />
      <main className={classNames("h-screen", inter.className)}>

        <h1 className="text-2xl py-2">
          Introducing LangAI {PackageJSON.version}
        </h1>
        <h2>All Things are done automatically with AI</h2>
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
