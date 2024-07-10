import { GetStaticProps } from "next";

import { getTextToSpeechStaticProps } from "@/modules/text-to-speech/lib/getTextToSpeechPageStaticProps";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import NextLink from "@/common/components/NextLink";

import TextToSpeechProvider from "@/modules/text-to-speech/components/TextToSpeechProvider";
import TextToSpeechTextarea from "@/modules/text-to-speech/components/TextToSpeechTextarea";
import TextToSpeechResult from "@/modules/text-to-speech/components/TextToSpeechResult";
import TextToSpeechHeader from "@/modules/text-to-speech/components/TextToSpeechHeader";

interface TTSProps {
  datoCmsData: NextHeadProps;
}

export const getStaticProps: GetStaticProps = getTextToSpeechStaticProps;

const TextToSpeech = (props: TTSProps) => {
  const { datoCmsData } = props;

  return (
    <div className="container mx-auto mt-20 lg:mt-4 text-sm pb-8">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <TextToSpeechProvider>
        <TextToSpeechHeader />
        <TextToSpeechTextarea />
        <TextToSpeechResult />
      </TextToSpeechProvider>
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

export default TextToSpeech;
