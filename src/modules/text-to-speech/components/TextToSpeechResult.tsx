import { useMemo } from "react";
import { TbDotsVertical, TbDownload, TbDownloadOff } from "react-icons/tb";

interface ITextToSpeechResult {
  fileName: string;
}

const TextToSpeechResult = (props: ITextToSpeechResult) => {
  const { fileName } = props;
  const fileUrl = useMemo(() => {
    return `${process.env.NEXT_PUBLIC_FILE_URL}v1/files/${fileName}`;
  }, [fileName]);

  return (
    <div className="px-2 mt-4 lg:mt-0">
      <audio controls className="w-full" src={fileUrl}>
        <source src={fileUrl} type="audio/mp3" />
      </audio>
      {fileName ? (
        <div className="float-right mt-2 text-sm text-gray-500">
          *audio will show after convert
        </div>
      ) : (
        <div className="flex items-center float-right mt-2 text-sm text-gray-500">
          *click the <TbDotsVertical /> icon to download{" "}
        </div>
      )}
    </div>
  );
};

export default TextToSpeechResult;
