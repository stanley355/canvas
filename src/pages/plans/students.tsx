import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";
import PlanHomeStatistic from "@/modules/plans/components/PlanHomeStatistic";
import PlanStudentsBenefits from "@/modules/plans/components/PlanStudentsBenefits";
import { GetStaticProps } from "next";

interface IPlansProps {
  datoCmsData: IMetaHead;
}
const Students = (props: IPlansProps) => {
  const { datoCmsData } = props;
  return (
    <div className="container px-6 mx-auto mt-24 lg:mt-4 lg:px-12">
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="mb-8 text-3xl font-bold text-center">
        Great Writing Starts with a Plan
      </div>
      <PlanHomeStatistic />
      <PlanStudentsBenefits />
    </div>
  );
};

export default Students;
export const getStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, { slug: "students" });

  return {
    props: {
      datoCmsData,
    },
  };
};
