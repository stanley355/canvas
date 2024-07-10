import { getDatoPagesSchema } from "@/common/lib/api/dato/datoQueries";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { GetStaticProps } from "next";

export const getPlanPageStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getDatoPagesSchema, {
    slug: "plans",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
