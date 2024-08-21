import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeFeatures from "@/modules/home/components/HomeFeatures";

type THomeProps = {
  datoCmsData: NextHeadProps;
};

export const getStaticProps: GetStaticProps = getHomePageStaticProps;

const Home = ({ datoCmsData }: THomeProps) => {
  return (
    <div className="snap-y">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <HomeHero />
      <HomeFeatures />
    </div>
  );
};

export default Home;
