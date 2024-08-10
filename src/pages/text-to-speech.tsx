import { GetStaticProps } from "next";

import { getTextToSpeechStaticProps } from "@/modules/text-to-speech/lib/getTextToSpeechPageStaticProps";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import NextLink from "@/common/components/NextLink";

import TextToSpeechProvider from "@/modules/text-to-speech/components/TextToSpeechProvider";
import TextToSpeechTextarea from "@/modules/text-to-speech/components/TextToSpeechTextarea";
import TextToSpeechResult from "@/modules/text-to-speech/components/TextToSpeechResult";
import Input from "@/common/components/Input";
import Select from "@/common/components/Select";
import TextToSpeechForm from "@/modules/text-to-speech/components/TextToSpeechForm";

interface TTSProps {
  datoCmsData: NextHeadProps;
}

export const getStaticProps: GetStaticProps = getTextToSpeechStaticProps;

const TextToSpeech = (props: TTSProps) => {
  const { datoCmsData } = props;

  return (
    <TextToSpeechProvider>
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="min-h-screen p-2 lg:px-0">
        <div className="container mx-auto border rounded-lg">
          <h1 className="p-4 font-semibold border-b">Text to Speech</h1>
          <TextToSpeechForm />
        </div>
      </div>
    </TextToSpeechProvider>
  );
};

export default TextToSpeech;
