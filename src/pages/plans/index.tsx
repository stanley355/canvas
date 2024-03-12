import { GetStaticProps } from "next";
import PlanHomePlanList from "@/modules/plans/components/PlanHomePlanList";
import PlanHomeStatistic from "@/modules/plans/components/PlanHomeStatistic";
import { getPlanPageStaticProps } from "@/modules/plans/lib/getPlanPageStaticProps";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";

interface IPlansProps {
  datoCmsData: IMetaHead;
}

const Plans = (props: IPlansProps) => {
  const { datoCmsData } = props;
  return (
    <div className="container px-6 mx-auto mt-24 lg:mt-4 lg:px-12">
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="mb-8 text-3xl font-bold text-center">
        Great Writing Starts with a Plan
      </div>

      <PlanHomeStatistic />
      <PlanHomePlanList />
    </div>
  );
};

export default Plans;
export const getStaticProps: GetStaticProps = getPlanPageStaticProps;
