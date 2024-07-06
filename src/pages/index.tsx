import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeFeatures from "@/modules/home/components/HomeFeatures";

interface HomeProps {
  datoCmsData: NextHeadProps;
}

export const getStaticProps: GetStaticProps = getHomePageStaticProps;

const Home = (props: HomeProps) => {
  const { datoCmsData } = props;
  return (
    <div className=" mt-20 lg:mt-0">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <HomeHero />
      <HomeFeatures />
    </div>
  );
};

export default Home;
