import { useContext } from 'react'
import { PhoneticTranscriptionsContext } from './PhoneticTranscriptionsContext'
import PhoneticTranscriptionsLanguageSelect from './PhoneticTranscriptionsLanguageSelect';
import PhoneticTranscriptionsUserTextarea from './PhoneticTranscriptionsUserTextarea';

const PhoneticTranscriptionsMain = () => {
  const {phoneticTranscriptionsDispatch, phoneticTranscriptionsStates} = useContext(PhoneticTranscriptionsContext);
  const {language, userText} = phoneticTranscriptionsStates;
  return (
    <div>
      <div>
        <PhoneticTranscriptionsLanguageSelect language={language} phoneticTranscriptionsDispatch={phoneticTranscriptionsDispatch} />
        <PhoneticTranscriptionsUserTextarea userText={userText} phoneticTranscriptionsDispatch={phoneticTranscriptionsDispatch} />
      </div>
    </div>
  )
}

export default PhoneticTranscriptionsMain