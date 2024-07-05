import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";
import { GetStaticProps } from "next";

export const getTranslatePageStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "translate",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
