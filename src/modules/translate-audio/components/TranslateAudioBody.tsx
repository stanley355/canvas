import { memo, useContext } from "react"
import { TranslateAudioContext } from "./TranslateAudioContext"
import TranslateAudioInput from "./TranslateAudioInput"
import TranslateAudioResult from "./TranslateAudioResult"

const TranslateAudioBody = () => {
  const { translateAudioDispatch, translateAudioStates } = useContext(TranslateAudioContext)
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <TranslateAudioInput translateAudioDispatch={translateAudioDispatch} translateAudioStates={translateAudioStates} />
      <TranslateAudioResult text={translateAudioStates.text} />
    </div>
  )
}

export default memo(TranslateAudioBody)