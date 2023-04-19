import React from "react";
import { GetStaticProps } from "next";
import classNames from "classnames";
import { SiTaichilang } from "react-icons/si";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";
import MetaSEO from "@/common/components/MetaSEO";
import PackageJSON from "../../package.json";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = (props: any) => {
  const { seo } = props;

  const Hero = () => (
    <div className="py-2">
      <div className="animate-typing h-80 overflow-hidden relative">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a elementum
        nunc. Etiam nisi nisl, pellentesque id diam ut, bibendum venenatis
        augue. Donec consequat nisl et sapien iaculis, eget facilisis sem
        pulvinar. Aliquam congue leo non est fermentum, ut tincidunt tortor
        efficitur. Etiam lorem nisl, iaculis vel lacinia eu, porttitor sit amet
        nibh. Sed suscipit purus sed est semper malesuada. Pellentesque molestie
        vitae libero sed pharetra. Duis lacinia congue eros eget commodo.
        Suspendisse massa magna, rhoncus eget magna id, eleifend tincidunt diam.
        Vivamus a libero sollicitudin, faucibus lectus a, fermentum nisi. In
        quam velit, vulputate et viverra sit amet, eleifend eu ante. Aenean
        accumsan ullamcorper dignissim. Donec consectetur orci ut scelerisque
        condimentum.
        <h1 className="absolute top-[45%] left-[30%] bg-black p-2 text-3xl flex flex-row items-center border">
          <SiTaichilang />
          <span className="ml-2">
          LangAI
          </span>
        </h1>
      </div>
      <h3 className="text-2xl py-2">
        Introducing LangAI {PackageJSON.version}
      </h3>
      <div className="text-lg">
        The most advanced language and text processing system
      </div>
    </div>
  );

  return (
    <div>
      <MetaSEO seo={seo} />
      <Header />
      <main className={classNames("h-screen px-2 container mx-auto", inter.className)}>
        <Hero />
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
