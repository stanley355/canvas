import NextButton from '@/common/components/NextButton';
import NextInput from '@/common/components/NextInput'
import React, { FormEvent, useRef, useState } from 'react'
import { TbMicrophone, TbUpload } from 'react-icons/tb';
import { toast } from 'react-toastify';

const SpeechToTextAudioInput = () => {
  const inputRef = useRef<any>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const audioFile = target.audio.files[0];

    const maxFileSize = 24 * 1024 * 1024 // 24MB
    if (audioFile.size > maxFileSize) {
      toast.error('Max file size is 24MB');
      return;
    }
  }

  return (
    <form className='px-2 lg:px-0 relative' onSubmit={handleSubmit}>
      <NextButton
        type='button'
        variant='outline'
        className='flex-col justify-center h-40 w-full'
        onClick={() => inputRef.current.click()}>
        <TbUpload className='text-3xl' />
        <div className='text-lg'>
          {file ? file.name : 'Click to Upload'}
        </div>
        <div>{file ?
          `${Math.floor(file.size / 1024 / 1024) > 1 ? `${Math.floor(file.size / 1024 / 1024)}MB` :
            `${Math.floor(file.size / 1024)}KB`}` : '*Max file size 24 MB'}
        </div>
      </NextButton>
      <NextButton className='absolute right-3 bottom-6 lg:right-1 ' type='submit'>
        <TbMicrophone />
        <div>Convert</div>
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