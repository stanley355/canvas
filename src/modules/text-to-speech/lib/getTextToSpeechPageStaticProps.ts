import { GetStaticProps } from "next";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";

export const getTextToSpeechStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "text-to-speech",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
