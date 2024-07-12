import { useContext } from "react";
import SpeechToTextLanguageSelect from "./SpeechToTextLanguageSelect";
import { SpeechToTextContext } from "./SpeechToTextContext";
import SpeechToTextAudioInput from "./SpeechToTextAudioInput";
import SpeechToTextResult from "./SpeechToTextResult";
import SpeechToTextTranscriptionWordsTable from "./SpeechToTextTranscriptionWordsTable";
import SpeechToTextTranscriptionSegmentTable from "./SpeechToTextTranscriptionSegmentsTable";

const SpeechToTextBody = () => {
  const { speechToTextDispatch, speechToTextStates } =
    useContext(SpeechToTextContext);
  const { language, transcription } = speechToTextStates;

  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <SpeechToTextLanguageSelect
            language={language}
            speechToTextDispatch={speechToTextDispatch}
          />
          <SpeechToTextAudioInput
            speechToTextDispatch={speechToTextDispatch}
            speechToTextStates={speechToTextStates}
          />
        </div>
        <SpeechToTextResult text={transcription?.text} />
      </div>
      {transcription?.words && transcription?.words?.length > 0 && <SpeechToTextTranscriptionWordsTable transcriptionWords={transcription?.words} /> }
      {transcription?.segments&& transcription?.segments?.length > 0 && <SpeechToTextTranscriptionSegmentTable transcriptionSegment={transcription.segments} />}
    </div>
  );
};

export default SpeechToTextBody;
