import { GetStaticProps } from "next";

import { getSpeechToTextStaticProps } from "@/modules/speech-to-text/lib/getSpeechToTextStaticProps";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import SpeechToTextProvider from "@/modules/speech-to-text/components/SpeechToTextProvider";
import SpeechToTextHeader from "@/modules/speech-to-text/components/SpeechToTextHeader";

export const getStaticProps: GetStaticProps = getSpeechToTextStaticProps;

interface STTProps {
  datoCmsData: NextHeadProps;
}

const SpeechToText= (props: STTProps) => {
  const {datoCmsData} = props;

  return (
    <div className="container mx-auto mt-16 lg:mt-0 text-sm pb-8">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <SpeechToTextProvider>
        <SpeechToTextHeader />
      </SpeechToTextProvider>
    </div>
  )
}

export default SpeechToText; 