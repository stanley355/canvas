import { GetStaticProps } from "next";
import { getHomePageStaticProps } from "@/modules/home/lib/getHomePageStaticProps";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";

interface IHomeProps {
  datoCmsData: IMetaHead;
}

const Home = (props: IHomeProps) => {
  const { datoCmsData } = props;
  return (
    <div>
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = getHomePageStaticProps;