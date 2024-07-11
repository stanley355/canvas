import { GetStaticProps } from "next";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getDatoPagesSchema } from "@/common/lib/api/dato/datoQueries";

export const getSpeechToTextStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getDatoPagesSchema, {
    slug: "speech-to-text",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
