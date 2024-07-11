import { useContext } from 'react'
import SpeechToTextLanguageSelect from './SpeechToTextLanguageSelect'
import { SpeechToTextContext } from './SpeechToTextContext'

const SpeechToTextBody = () => {
  const {speechToTextDispatch, speechToTextStates} =useContext(SpeechToTextContext);
  const {language} = speechToTextStates
  return (
    <div>
      <SpeechToTextLanguageSelect language={language} speechToTextDispatch={speechToTextDispatch} />

    </div>
  )
}

export default SpeechToTextBody