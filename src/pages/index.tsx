import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeFourHorsemen from "@/modules/home/components/HomeFourHorsemen";
import HomeStudent from "@/modules/home/components/HomeStudent";
import HomeStatistic from "@/modules/home/components/HomeStatistic";
import HomeUserOrigin from "@/modules/home/components/HomeUserOrigin";
import HomeFaq from "@/modules/home/components/HomeFaq";

interface IHomeProps {
  datoCmsData: IMetaHead;
}

const Home = (props: IHomeProps) => {
  const { datoCmsData } = props;
  return (
    <>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="">
        <HomeHero />
        <HomeFourHorsemen />
        <HomeStudent />
        <HomeStatistic />
        <HomeUserOrigin />
        <HomeFaq faq={datoCmsData?.pagesSchema?.faq} />
      </div>
    </>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = getHomePageStaticProps;
