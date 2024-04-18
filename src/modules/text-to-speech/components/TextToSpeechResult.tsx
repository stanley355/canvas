import { useMemo } from "react";
import { TbDotsVertical, TbCircleCaretRight } from "react-icons/tb";

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
      {fileName ? (
        <audio controls className="w-full" src={fileUrl}>
          <source src={fileUrl} type="audio/mp3" />
        </audio>
      ) : (
        <div className="flex items-center w-full gap-1 p-2 text-sm text-white bg-gray-400 rounded-md">
          <TbCircleCaretRight />
          <span>your audio will show here</span>
        </div>
      )}
      {fileName ? (
        <div className="flex items-center float-right mt-2 text-sm text-gray-500">
          *click the <TbDotsVertical /> icon to download{" "}
        </div>
      ) : (
        <div className="float-right mt-2 text-sm text-gray-500">
          *audio will show after convert
        </div>
      )}
    </div>
  );
};

export default TextToSpeechResult;
