import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import HomeHero from "@/modules/home/components/HomeHero";

type THomeProps = {
  datoCmsData: NextHeadProps;
};

export const getStaticProps: GetStaticProps = getHomePageStaticProps;

const Home = ({ datoCmsData }: THomeProps) => {
  return (
    <>
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <HomeHero />
    </>
  );
};

export default Home;
