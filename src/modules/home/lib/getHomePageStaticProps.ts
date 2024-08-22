import { GetStaticProps } from "next";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getDatoPagesSchema } from "@/common/lib/api/dato/datoQueries";

export const getHomePageStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getDatoPagesSchema, {
    slug: "home",
  });

 
  return {
    props: {
      datoCmsData,
    },
  };
};
