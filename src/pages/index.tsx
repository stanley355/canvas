import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeFourHorsemen from "@/modules/home/components/HomeFourHorsemen";
import HomeStudent from "@/modules/home/components/HomeStudent";
import HomeStatistic from "@/modules/home/components/HomeStatistic";
import HomeUserOrigin from "@/modules/home/components/HomeUserOrigin";
import HomeUserNeed from "@/modules/home/components/HomeUserNeed";

interface IHomeProps {
  datoCmsData: IMetaHead;
}

const Home = (props: IHomeProps) => {
  const { datoCmsData } = props;
  return (
    <div>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="container mx-auto mt-12 lg:max-w-full lg:mt-0">
        <HomeHero />
        <HomeFourHorsemen />
        <HomeStudent />
        <HomeStatistic />
        <HomeUserOrigin />
        <HomeUserNeed />
      </div>
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = getHomePageStaticProps;
