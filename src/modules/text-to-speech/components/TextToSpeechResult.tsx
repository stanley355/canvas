import { useContext, useMemo } from "react";
import { TextToSpeechContext } from "./TextToSpeechContext";
import { BsSoundwave } from "react-icons/bs";
import Link from "next/link";

const TextToSpeechResult = () => {
  const { textToSpeechStates } = useContext(TextToSpeechContext);
  const { currentFileID, audioFormat } = textToSpeechStates;

  const fileUrl = useMemo(() => {
    if (currentFileID && audioFormat) {
      return `${
        process.env.NEXT_PUBLIC_FILE_URL
      }v1/files/${currentFileID}.${audioFormat.toLowerCase()}`;
    }
    return "";
  }, [currentFileID, audioFormat]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-60">
      <div className="flex items-center gap-2 text-sm">
        <BsSoundwave className="p-1 text-4xl text-white rounded-md bg-brand-primary" />
        {fileUrl ? (
          <Link href={fileUrl} className="border-b hover:border-b-black">
            Download Link
          </Link>
        ) : (
          <div className="">Generated speech will appear here</div>
        )}
      </div>
      {fileUrl && <audio src={fileUrl} controls className="mb-4 flex-2" />}
    </div>
  );
};

export default TextToSpeechResult;
