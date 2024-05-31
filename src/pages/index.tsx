import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeFourHorsemen from "@/modules/home/components/HomeFourHorsemen";
import HomeStudent from "@/modules/home/components/HomeStudent";


interface IHomeProps {
  datoCmsData: IMetaHead;
}

const Home = (props: IHomeProps) => {
  const { datoCmsData } = props;
  return (
    <div>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="container mx-auto mt-12">
        <HomeHero />
        <HomeFourHorsemen />
        <HomeStudent />
      </div>
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = getHomePageStaticProps;
