import { useContext } from 'react';
import { TbLanguage } from 'react-icons/tb'

import NextSelect from '@/common/components/NextSelect';
import { TranslateAudioContext } from './TranslateAudioContext';

import { sendFirebaseEvent } from '@/modules/firebase/lib/sendFirebaseEvent';
import { FIREBASE_EVENT_NAMES } from '@/modules/firebase/lib/firebaseEventNames';
import { SPEECH_TO_TEXT_DIFF_OPTIONS } from '@/modules/speech-to-text/lib/speechToTextDiffOptions';

const TranslateAudioHeader = () => {
  const { translateAudioDispatch } = useContext(TranslateAudioContext);

  return (
    <div className="p-4 flex lg:px-0 justify-between lg:justify-start lg:gap-4 items-center">
      <div className="flex border border-brand-primary items-center gap-1 rounded-lg p-2 bg-blue-100 w-fit">
        <TbLanguage />
        Audio Translate
      </div>

      <NextSelect
        id="translate_diff"
        placeholder="Diff: Mid"
        containerClassname='w-1/2 lg:w-1/6'
        selectClassname="border-gray-200"
        options={SPEECH_TO_TEXT_DIFF_OPTIONS}
        onChange={(option) => {
          translateAudioDispatch({ key: "temperature", value: option.value });
          sendFirebaseEvent(FIREBASE_EVENT_NAMES.change.change_translate_audio_diff);
        }}
      />
    </div>
  )
}

export default TranslateAudioHeader