import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import HomeMobile from "@/modules/home/components/mobile/HomeMobile";


interface IHomeProps {
  datoCmsData: IMetaHead;
}

const Home = (props: IHomeProps) => {
  const { datoCmsData } = props;
  return (
    <div>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <HomeMobile />
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = getHomePageStaticProps;
