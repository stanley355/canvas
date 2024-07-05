import { GetStaticProps } from "next";
import { TbSpeakerphone } from "react-icons/tb";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import TextToSpeechProvider from "@/modules/text-to-speech/components/TextToSpeechProvider";
import TextToSpeechTextarea from "@/modules/text-to-speech/components/TextToSpeechTextarea";

import { getTextToSpeechStaticProps } from "@/modules/text-to-speech/lib/getTextToSpeechPageStaticProps";

interface TTSProps {
  datoCmsData: NextHeadProps;
}

export const getStaticProps: GetStaticProps = getTextToSpeechStaticProps;

const TextToSpeech = (props: TTSProps) => {
  const { datoCmsData } = props;

  return (
    <div className="container mx-auto mt-20 lg:mt-0 text-sm pb-8">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="flex border border-brand-primary items-center gap-1 rounded-lg p-2 bg-blue-100 mb-4 w-fit ml-2">
        <TbSpeakerphone />
        Text to Speech
      </div>
      <TextToSpeechProvider>
        <TextToSpeechTextarea />
      </TextToSpeechProvider>
    </div>
  );
};

export default TextToSpeech;
