import { GetStaticProps } from "next";

import { getSpeechToTextStaticProps } from "@/modules/speech-to-text/lib/getSpeechToTextStaticProps";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import SpeechToTextProvider from "@/modules/speech-to-text/components/SpeechToTextProvider";

// export const getStaticProps: GetStaticProps = getSpeechToTextStaticProps;

interface STTProps {
  datoCmsData: NextHeadProps;
}

const SpeechToText= (props: STTProps) => {
  // const {datoCmsData} = props;
  return (
    <div className="container mx-auto mt-20 lg:mt-4 text-sm pb-8">
      {/* <NextHead pagesSchema={datoCmsData.pagesSchema} /> */}
      <SpeechToTextProvider>
        woi
      </SpeechToTextProvider>
    </div>
  )
}

export default SpeechToText; 