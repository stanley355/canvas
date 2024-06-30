import { GetStaticProps } from "next";

import { getPlanPageStaticProps } from "@/modules/plans/lib/getPlanPageStaticProps";
import PlanHomeSchools from "@/modules/plans/components/home/PlanHomeSchools";
import PlanHomeList from "@/modules/plans/components/home/PlanHomeList";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";

interface IPlansProps {
  datoCmsData: NextHeadProps;
}

export const getStaticProps: GetStaticProps = getPlanPageStaticProps;

const Plans = (props: IPlansProps) => {
  const { datoCmsData } = props;

  return (
    <div className="container mt-20 px-4 lg:mt-4">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <h1 className="text-center font-bold text-3xl mb-4">A Plan for your Need</h1>
      <PlanHomeSchools />
      <PlanHomeList />
    </div>
  );
};

export default Plans;
