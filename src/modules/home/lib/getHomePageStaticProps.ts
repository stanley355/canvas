import { GetStaticProps } from "next";
import { fetchDatoCms } from "@/common/lib/api/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";

export const getHomePageStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "home",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
