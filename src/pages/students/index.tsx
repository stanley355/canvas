import { GetStaticProps } from "next";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import StudentsHero from "@/modules/students/components/home/StudentsHero";

import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getDatoPagesSchema } from "@/common/lib/api/dato/datoQueries";

interface IStudents {
  datoCmsData: NextHeadProps;
}

const Students = (props: IStudents) => {
  const { datoCmsData } = props;

  return (
    <div className="mt-14 lg:mt-0">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <StudentsHero />
    </div>
  );
};

export default Students;

export const getStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getDatoPagesSchema, {
    slug: "students",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
