import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeFeatures from "@/modules/home/components/HomeFeatures";
import HomeStudent from "@/modules/home/components/HomeStudent";

type THomeProps = {
  datoCmsData: NextHeadProps;
};

export const getStaticProps: GetStaticProps = getHomePageStaticProps;

const Home = ({ datoCmsData }: THomeProps) => {
  return (
    <div>
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <HomeHero />
      <HomeFeatures />
      <HomeStudent />
    </div>
  );
};

export default Home;
