import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeFeatures from "@/modules/home/components/HomeFeatures";
import HomeStudent from "@/modules/home/components/HomeStudent";
import HomeFinal from "@/modules/home/components/HomeFinal";

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
      <HomeStudent />
      <HomeFinal />
    </div>
  );
};

export default Home;
