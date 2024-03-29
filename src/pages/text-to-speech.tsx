import { TbSpeakerphone } from "react-icons/tb";
import TextToSpeechTextarea from "@/modules/text-to-speech/components/TextToSpeechTextarea";
import { GetStaticProps } from "next";
import { useState } from "react";
import TextToSpeechResult from "@/modules/text-to-speech/components/TextToSpeechResult";

const TextToSpeech = () => {
  const [fileName, setFilename] = useState("");
  
  
  return (
    <div className="container px-0 pb-8 mx-auto mt-16 lg:mt-4 lg:px-4">
      <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbSpeakerphone className="text-xl" />
        <span>Text to Speech</span>
      </div>

      <div className="grid grid-cols-2 mt-4 lg:px-4">

      <TextToSpeechTextarea onConvertSuccess={setFilename} />
      <TextToSpeechResult fileName={fileName} />
      </div>
    </div>
  )
}

export default TextToSpeech;
export const getStaticProps: GetStaticProps = () => {
  return {
    props:{}
  }
}