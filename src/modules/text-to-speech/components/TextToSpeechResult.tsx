import { useContext, useMemo } from "react";
import { TextToSpeechContext } from "./TextToSpeechContext";
import NextLink from "@/common/components/NextLink";

const TextToSpeechResult = () => {
  const { textToSpeechStates } = useContext(TextToSpeechContext);

  const fileUrl = useMemo(() => {
    return `${process.env.NEXT_PUBLIC_FILE_URL}v1/files/${textToSpeechStates.currentFileID}.mp3`;
  }, [textToSpeechStates.currentFileID])

  return (
    <div className={textToSpeechStates.currentFileID === "" ? "hidden" : "block mb-8"}>
      <audio controls className="w-full mb-4" src={fileUrl} />
      <div className="flex items-center gap-2 ml-2 lg:ml-0">
        <span>File URL: </span>
        <NextLink href={fileUrl} variant="outline" >Click here</NextLink>
      </div>
    </div>
  );
};

export default TextToSpeechResult;
