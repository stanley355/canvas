import { useState } from "react";
import { GetStaticProps } from "next";

import NextHead, { NextHeadProps } from "@/common/components/NextHead";
import { getTextToSpeechStaticProps } from "@/modules/text-to-speech/lib/getTextToSpeechPageStaticProps";
import { TbSpeakerphone } from "react-icons/tb";

interface TTSProps {
  datoCmsData: NextHeadProps;
}

export const getStaticProps: GetStaticProps = getTextToSpeechStaticProps;

const TextToSpeech = (props: TTSProps) => {
  const { datoCmsData } = props;
  const [promptID, setPromptID] = useState<string>("");

  return (
    <div className="container mx-auto mt-16 lg:mt-0 text-sm pb-8">
      <NextHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="flex border border-brand-primary items-center gap-1 rounded-lg p-2 bg-blue-100 mb-4 w-fit ml-2">
        <TbSpeakerphone/>
        Text to Speech
      </div>
      {/* <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbSpeakerphone className="text-xl" />
        <span>Text to Speech</span>
      </div>

      <div className="grid-cols-2 mt-4 lg:grid lg:px-4">
        <TextToSpeechTextarea onConvertSuccess={setPromptID} />
        <TextToSpeechResult promptID={Number(promptID)} />
      </div>

      <div className="flex items-center justify-center gap-2 mt-16">
        <span>Found an Issue ? </span>
        <Link
          className="text-blue-500 border-b border-b-blue-500"
          href={"/support"}
        >
          Report
        </Link>
      </div> */}
    </div>


  );
};

export default TextToSpeech;
