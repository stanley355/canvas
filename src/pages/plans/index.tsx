import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import { getPlanPageStaticProps } from "@/modules/plans/lib/getPlanPageStaticProps";
import NextHead from "@/common/components/NextHead";
import PlanHomeSchools from "@/modules/plans/components/home/PlanHomeSchools";
// import PlanHomePlanList from "@/modules/plans/components/PlanHomePlanList";
// import PlanHomeStatistic from "@/modules/plans/components/PlanHomeStatistic";

interface IPlansProps {
  datoCmsData: IMetaHead;
}

const Plans = (props: IPlansProps) => {
  const { datoCmsData } = props;
  const router = useRouter();
  return (
    <div className="container mt-20 px-4">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />

      <h1 className="text-center font-bold text-3xl mb-4">A Plan for your Need</h1>
      <PlanHomeSchools />
      {/* <MetaHead pagesSchema={datoCmsData.pagesSchema} /> */}

      {/* <div className="pt-12 mb-2 text-3xl font-bold text-center lg:pt-0 ">
        Great Writing Starts with a Plan
      </div>

      <div className="items-center justify-center mb-8 lg:flex">
        <button
          type="button"
          onClick={() => {
            router.push("/plans/students/");
          }}
          className="fixed left-0 w-full p-2 text-center bg-yellow-300 border top-12 lg:text-sm lg:static lg:w-fit "
        >
          Are you a student? Apply here for free{" "}
          <span className="ml-1 text-blue-500 underline">Student Plan </span>
        </button>
      </div>

      <PlanHomeStatistic />
      <PlanHomePlanList /> */}
    </div>
  );
};

export default Plans;
export const getStaticProps: GetStaticProps = getPlanPageStaticProps;
