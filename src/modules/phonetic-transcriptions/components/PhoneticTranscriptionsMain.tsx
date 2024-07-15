import { useContext } from 'react'
import { PhoneticTranscriptionsContext } from './PhoneticTranscriptionsContext'
import PhoneticTranscriptionsLanguageSelect from './PhoneticTranscriptionsLanguageSelect';

const PhoneticTranscriptionsMain = () => {
  const {phoneticTranscriptionsDispatch, phoneticTranscriptionsStates} = useContext(PhoneticTranscriptionsContext);
  const {language} = phoneticTranscriptionsStates;
  return (
    <div>
      <div>
        <PhoneticTranscriptionsLanguageSelect language={language} phoneticTranscriptionsDispatch={phoneticTranscriptionsDispatch} />
      </div>
    </div>
  )
}

export default PhoneticTranscriptionsMain