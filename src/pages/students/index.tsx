import { GetStaticProps } from "next";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import StudentsHero from "@/modules/students/components/home/StudentsHero";

import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";
import AccountFreePlanTable from "@/modules/account/components/AccountFreePlanTable";

interface IStudents {
  datoCmsData: NextHeadProps;
}

const Students = (props: IStudents) => {
  const { datoCmsData } = props;

  return (
    <div className="mt-14 lg:mt-0">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <StudentsHero />
      <div className="lg:w-1/2 lg:mx-auto p-4 lg:px-0">
        <h3 className="text-center text-2xl font-bold mb-4">
          Comparing Student Plan to other plans
        </h3>
        <AccountFreePlanTable />
      </div>
    </div>
  );
};

export default Students;

export const getStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "students",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
