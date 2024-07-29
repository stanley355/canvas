import { TbLanguage } from 'react-icons/tb'
import NextSelect from '@/common/components/NextSelect';
import { SPEECH_TO_TEXT_DIFF_OPTIONS } from '@/modules/speech-to-text/lib/speechToTextDiffOptions';

const TranslateAudioHeader = () => {
  return (
    <div className="p-4 flex lg:px-0 justify-between items-center">
      <div className="flex border border-brand-primary items-center gap-1 rounded-lg p-2 bg-blue-100 w-fit">
        <TbLanguage />
        Audio Translate
      </div>

      <NextSelect
        id="translate_diff"
        placeholder="Diff: Mid"
        containerClassname='w-1/2'
        selectClassname="border-gray-200"
        options={SPEECH_TO_TEXT_DIFF_OPTIONS}
        onChange={(option) => {
          // sendFirebaseEvent(
          //   FIREBASE_EVENT_NAMES.change.change_translate_temperature
          // );
          // translateDispatch({ key: "temperature", value: option.value });
        }}
      />
    </div>
  )
}

export default TranslateAudioHeader