import { GetStaticProps } from "next";

// import StudentsHero from "@/modules/students/components/StudentsHero";

import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";
// import StudentsHeroSupport from "@/modules/students/components/StudentsHeroSupport";
// import StudentsAssignmentBenefit from "@/modules/students/components/StudentsAssignmentBenefit";
// import StudentsBoostGrades from "@/modules/students/components/StudentsBoostGrades";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import StudentsHero from "@/modules/students/components/home/StudentsHero";

interface IStudents {
  datoCmsData: NextHeadProps;
}

const Students = (props: IStudents) => {
  const { datoCmsData } = props;

  return (
    <div className="mt-14">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <StudentsHero />
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
