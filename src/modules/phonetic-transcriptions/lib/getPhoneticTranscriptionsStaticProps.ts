import { GetStaticProps } from "next";
import { getDatoPagesSchema } from "@/common/lib/api/dato/datoQueries";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";

export const getPhoneticTranscriptionsStaticProps: GetStaticProps =
  async () => {
    const datoCmsData = await fetchDatoCms(getDatoPagesSchema, {
      slug: "phonetic-transcriptions",
    });

    return {
      props: {
        datoCmsData,
      },
    };
  };
