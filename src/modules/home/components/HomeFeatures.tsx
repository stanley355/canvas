import NextLink from '@/common/components/NextLink'
import Image from 'next/image'
import React from 'react'
import { FaRobot } from 'react-icons/fa6'
import { TbLanguage, TbSpeakerphone } from 'react-icons/tb'

const HomeFeatures = () => {
  return (
    <div className='bg-brand-primary text-white p-8 px-4 lg:px-0' id='home_features'>
      <div className='container mx-auto'>
        <h2 className='text-3xl text-center font-bold mb-8'>One AI for your writing</h2>

        <div id='home_translate' className='lg:grid grid-cols-2 gap-8 place-items-center mb-16'>
          <div className='h-[40vh] relative mb-8'>
            <Image
              src="/images/home/translate1.png"
              alt='Languageai AI Translate 1'
              width={400}
              height={400}
              className='w-4/5 h-2/3 rounded-lg'
            />
            <Image
              src="/images/home/translate2.png"
              alt='Languageai AI Translate 2'
              width={400}
              height={400}
              className='w-4/5 h-2/3 absolute right-0 bottom-0 rounded-lg'
            />
          </div>
          <div>
            <NextLink href="/translate" className='text-xl gap-1 flex items-center mb-4 border-b w-fit' variant='none'>
              <TbLanguage />
              AI Translate
            </NextLink>
            <div>
              Tired of word by word translation? Our AI Translate understands your text and translates contextually
            </div>
          </div>
        </div>

        <div className='lg:grid grid-cols-2 gap-8 place-items-center mb-16'>
          <div className='h-[40vh] relative mb-8'>
            <Image
              src="/images/home/checkbot1.png"
              alt='Languageai AI Checkbot 1'
              width={400}
              height={400}
              className='w-4/5 h-2/3 rounded-lg'
            />
            <Image
              src="/images/home/checkbot2.png"
              alt='Languageai AI Checkbot 2'
              width={400}
              height={400}
              className='w-4/5 h-2/3 absolute right-0 bottom-0 rounded-lg'
            />
          </div>
          <div>
            <NextLink href="/checkbot" className='text-xl gap-1 flex items-center mb-4 border-b w-fit' variant='none'>
              <FaRobot />
              AI Checkbot
            </NextLink>
            <div>
              Fix your writing easily. Check grammar and spelling, analyse strength and weakness, provide suggestions, and paraphrase in one click.
            </div>
          </div>
        </div>

        <div className='lg:grid grid-cols-2 gap-8 place-items-center'>
          <div className='h-[40vh] relative mb-8 lg:grid grid-cols-2 gap-8'>
            <Image
              src="/images/home/tts1.png"
              alt='Languageai AI Text to speech 1'
              width={400}
              height={400}
              className='lg:h-full rounded-lg w-4/5 h-2/3 lg:w-full'
            />
            <Image
              src="/images/home/tts2.png"
              alt='Languageai AI Text to Speech 2'
              width={400}
              height={400}
              className='lg:h-full rounded-lg w-4/5 h-2/3 lg:w-full absolute right-0 bottom-0 lg:relative'
            />
          </div>
          <div>
            <NextLink href="/text-to-speech" className='text-xl gap-1 flex items-center mb-4 border-b w-fit' variant='none'>
              <TbSpeakerphone />
              AI Text to Speech
            </NextLink>
            <div>
              A free text-to-speech tool and an online text reader that supports 50+ languages. You can listen online, or download audio files in mp3 format
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeFeatures