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
    <TextToSpeechProvider>
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="container mx-auto text-sm">

      </div>
    </TextToSpeechProvider>
  );
};

export default TextToSpeech;
