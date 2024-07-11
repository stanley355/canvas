import { GetStaticProps } from "next";

import { getSpeechToTextStaticProps } from "@/modules/speech-to-text/lib/getSpeechToTextStaticProps";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";

// export const getStaticProps: GetStaticProps = getSpeechToTextStaticProps;

interface STTProps {
  datoCmsData: NextHeadProps;
}

const SpeechToText= (props: STTProps) => {
  // const {datoCmsData} = props;
  return (
    <div className="container mx-auto mt-20 lg:mt-4 text-sm pb-8">
      {/* <NextHead pagesSchema={datoCmsData.pagesSchema} /> */}
      woi
    </div>
  )
}

export default SpeechToText; 