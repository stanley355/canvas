import { GetStaticProps } from "next";

import { getSpeechToTextStaticProps } from "@/modules/speech-to-text/lib/getSpeechToTextStaticProps";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import SpeechToTextProvider from "@/modules/speech-to-text/components/SpeechToTextProvider";
import SpeechToTextHeader from "@/modules/speech-to-text/components/SpeechToTextHeader";
import SpeechToTextBody from "@/modules/speech-to-text/components/SpeechToTextBody";
import NextLink from "@/common/components/NextLink";

export const getStaticProps: GetStaticProps = getSpeechToTextStaticProps;

interface STTProps {
  datoCmsData: NextHeadProps;
}

const SpeechToText = (props: STTProps) => {
  const { datoCmsData } = props;

  return (
    <div className="container mx-auto text-sm pb-8 min-h-screen">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <SpeechToTextProvider>
        <SpeechToTextHeader />
        <SpeechToTextBody />
      </SpeechToTextProvider>
      <div className="flex w-fit items-center gap-1 mx-auto">
        Found an error?{" "}
        <NextLink
          href="/support"
          variant="none"
          className="text-blue-800 underline"
        >
          Report
        </NextLink>{" "}
      </div>
    </div>
  );
};

export default SpeechToText;
