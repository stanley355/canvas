import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getDatoPagesSchema } from "@/common/lib/api/dato/datoQueries";
import { GetStaticProps } from "next";

export const getCheckbotPageStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getDatoPagesSchema, {
    slug: "checkbot",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
