import { useContext } from "react";
import { PhoneticTranscriptionsContext } from "./PhoneticTranscriptionsContext";
import PhoneticTranscriptionsLanguageSelect from "./PhoneticTranscriptionsLanguageSelect";
import PhoneticTranscriptionsUserTextarea from "./PhoneticTranscriptionsUserTextarea";
import PhoneticTranscriptionsResult from "./PhoneticTranscriptionsResult";

const PhoneticTranscriptionsMain = () => {
  const { phoneticTranscriptionsDispatch, phoneticTranscriptionsStates } =
    useContext(PhoneticTranscriptionsContext);
  const { language, userText, resultText } = phoneticTranscriptionsStates;
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      <div>
        <PhoneticTranscriptionsLanguageSelect
          language={language}
          phoneticTranscriptionsDispatch={phoneticTranscriptionsDispatch}
        />
        <PhoneticTranscriptionsUserTextarea
          userText={userText}
          phoneticTranscriptionsDispatch={phoneticTranscriptionsDispatch}
        />
      </div>
      <PhoneticTranscriptionsResult resultText={resultText} />
    </div>
  );
};

export default PhoneticTranscriptionsMain;
