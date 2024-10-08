import { GetStaticProps } from "next";
import Link from "next/link";

import { getTextToSpeechStaticProps } from "@/modules/text-to-speech/lib/getTextToSpeechPageStaticProps";
import NextHead, { NextHeadProps } from "@/common/components/NextHead";

import TextToSpeechProvider from "@/modules/text-to-speech/components/TextToSpeechProvider";
import TextToSpeechResult from "@/modules/text-to-speech/components/TextToSpeechResult";
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
      <div className="p-2 pb-4 lg:px-0">
        <div className="container mx-auto">
          <h1 className="p-4 font-semibold border rounded-t-md">
            Text to Speech
          </h1>
          <TextToSpeechForm />
          <TextToSpeechResult />
          <div className="flex items-center gap-1 mx-auto w-fit">
            Found an error?
            <Link href="/support" className="underline text-brand-primary">
              Report
            </Link>{" "}
          </div>
        </div>
      </div>
    </TextToSpeechProvider>
  );
};

export default TextToSpeech;
