import { useContext } from "react";
import SpeechToTextLanguageSelect from "./SpeechToTextLanguageSelect";
import { SpeechToTextContext } from "./SpeechToTextContext";
import SpeechToTextAudioInput from "./SpeechToTextAudioInput";

const SpeechToTextBody = () => {
  const { speechToTextDispatch, speechToTextStates } =
    useContext(SpeechToTextContext);
  const { language } = speechToTextStates;

  return (
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
    </div>
  );
};

export default SpeechToTextBody;
