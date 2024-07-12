import { FormEvent, useContext, useRef, useState } from 'react'
import { TbMicrophone, TbProgress, TbUpload } from 'react-icons/tb';
import { toast } from 'react-toastify';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { decode, JwtPayload } from 'jsonwebtoken';
import Cookies from 'js-cookie';

import NextButton from '@/common/components/NextButton';
import { SpeechToTextContext } from './SpeechToTextContext';
import { AppContext } from '@/modules/app/components/AppContext';

import { cn } from '@/common/lib/cn';
import { fetchPromptsTranscriptions } from '@/common/lib/api/prompts/fetchPromptsTranscriptions';
import { sendFirebaseEvent } from '@/modules/firebase/lib/sendFirebaseEvent';
import { FIREBASE_EVENT_NAMES } from '@/modules/firebase/lib/firebaseEventNames';

const SpeechToTextAudioInput = () => {
  const { appDispatch } = useContext(AppContext);
  const { speechToTextDispatch, speechToTextStates } = useContext(SpeechToTextContext);
  const { temperature, language, timestamp_granularities } = speechToTextStates;

  const inputRef = useRef<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = Cookies.get('token');
    if (!token) {
      appDispatch({ key: "showLoginModal", value: true });
      return;
    }

    const target = e.target as any;
    const audioFile = target.audio.files[0];

    if (!file) {
      toast.error("Please upload audio file");
      return;
    }

    const maxFileSize = 24 * 1024 * 1024 // 24MB
    if (audioFile.size > maxFileSize) {
      toast.error('Max file size is 24MB');
      return;
    }

    if (!language.value) {
      toast.error("Please select language");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.speech_to_text);
    try {
      const user = decode(token) as JwtPayload;
      const firebasePath = `audio/transcriptions/${user.id}:${new Date().getTime()}`;
      const storage = getStorage();
      const storef = ref(storage, firebasePath);
      const result = await uploadBytes(storef, audioFile);
      const downloadURL = await getDownloadURL(result.ref);

      const req = {
        user_id: user.id,
        file_url: downloadURL,
        temperature,
        language: language.value,
        ...timestamp_granularities && { timestamp_granularities }
      }

      const transcription = await fetchPromptsTranscriptions(req);
      if (transcription?.status === 402) {
        appDispatch({ key: "showMonthlyLimitModal", value: true });
        return;
      }

      setIsLoading(false);
      toast.success('Audio converted');
      speechToTextDispatch({ key: "transcription", value: transcription });
      return;
    } catch (error: any) {
      setIsLoading(false);
      toast.error('Server busy, please try again');
      return;
    }

  }

  return (
    <form className='px-2 lg:px-0 relative' onSubmit={handleSubmit}>
      <NextButton
        type='button'
        disabled={isLoading}
        variant={isLoading ? 'disabled' : 'outline'}
        className='flex-col justify-center h-40 w-full'
        onClick={() => inputRef.current.click()}>
        {isLoading ? <TbProgress className='text-3xl animate-spin' /> : <TbUpload className='text-3xl' />}
        <div className='text-lg'>
          {file ? file.name : 'Click to Upload'}
        </div>
        <div>{file ?
          `${Math.floor(file.size / 1024 / 1024) > 1 ? `${Math.floor(file.size / 1024 / 1024)}MB` :
            `${Math.floor(file.size / 1024)}KB`}` : '*Max file size 24 MB'}
        </div>
      </NextButton>
      <NextButton
        disabled={isLoading}
        className={cn('absolute right-3 bottom-6 lg:right-1 ', { 'border-brand-primary': isLoading })} type='submit'>
        <TbMicrophone />
        <div>{isLoading ? 'This may take a while' : 'Convert'}</div>
      </NextButton>
      <input type="file" id='audio_input' name='audio' ref={inputRef} accept=".mp3, .mp4, .wav"
        className='invisible h-0'
        onChange={(e) => {
          const target = e.target as any;
          const file = target.files[0];
          const maxFileSize = 24 * 1024 * 1024 // 24MB
          if (file.size > maxFileSize) {
            toast.error('Max file size is 24MB');
            return;
          }
          setFile(file);
          return;
        }}
      />
    </form>
  )
}

export default SpeechToTextAudioInput