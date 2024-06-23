import { useState } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { TbSpeakerphone } from "react-icons/tb";

import TextToSpeechTextarea from "@/modules/text-to-speech/components/TextToSpeechTextarea";
import TextToSpeechResult from "@/modules/text-to-speech/components/TextToSpeechResult";
import { fetchDatoCms } from "@/common/lib/api/dato/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";

interface ITTSProps {
  datoCmsData: IMetaHead;
}

const TextToSpeech = (props: ITTSProps) => {
  const { datoCmsData } = props;
  const [promptID, setPromptID] = useState<string>("");

  return (
    <div className="container px-0 pb-8 mx-auto mt-16 lg:mt-4 lg:px-4">
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
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
      </div>
    </div>
  );
};

export default TextToSpeech;
export const getStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "text-to-speech",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
