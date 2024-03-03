import { fetchDatoCms } from "@/common/lib/api/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";
import { GetStaticProps } from "next";

export const getLoginPageStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "login",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
