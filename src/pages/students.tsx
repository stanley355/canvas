import { GetStaticProps } from "next";

import MetaHead, { IMetaHead } from "@/common/components/MetaHead";
import StudentsHero from "@/modules/students/components/StudentsHero"

import { fetchDatoCms } from "@/common/lib/api/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";
import StudentsHeroSupport from "@/modules/students/components/StudentsHeroSupport";

interface IStudents {
  datoCmsData: IMetaHead
}

const Students = (props: IStudents) => {
  const { datoCmsData } = props;

  return (
    <div>
      {/* <MetaHead pagesSchema={datoCmsData.pagesSchema} /> */}
      <div className="bg-indigo-900">
        <StudentsHero />
        <StudentsHeroSupport />
      </div>
    </div>
  )
}

export default Students;

export const getStaticProps: GetStaticProps = async () => {
  // const datoCmsData = await fetchDatoCms(getPagesSchema, {
  //   slug: "students",
  // });

  return {
    props: {
      // datoCmsData,
    },
  };
};