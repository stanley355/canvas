import { GetServerSideProps } from "next";
import MetaSEO from "@/common/components/MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import PlanList from "@/modules/plans/components/PlanList";

const Plans = () => {
  return (
    <div>
      <MetaSEO seo={HOME_SEO} />
      <div className="container mx-auto p-4 lg:px-0">
        <PlanList />
      </div>
    </div>
  );
};

export default Plans;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
