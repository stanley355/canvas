import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeSponsors from "@/modules/home/components/HomeSponsors";
import HomeExplanation from "@/modules/home/components/HomeExplanation";
import HomeRoi from "@/modules/home/components/HomeRoi";

interface IHomeProps {
  datoCmsData: IMetaHead;
}

const Home = (props: IHomeProps) => {
  const { datoCmsData } = props;
  return (
    <div>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <HomeHero />
      <HomeSponsors />
      <HomeExplanation />
      <HomeRoi />
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = getHomePageStaticProps;