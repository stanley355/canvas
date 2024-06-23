import { GetStaticProps } from "next";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";

export const getGrammarCheckStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "grammar-check",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
