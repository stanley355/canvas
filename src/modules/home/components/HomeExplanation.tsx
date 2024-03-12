import Image from 'next/image'
import React from 'react'

const HomeExplanation = () => {
  return (
    <div className='container mx-auto mt-8 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-16'>
      <div className='mb-16 lg:flex lg:border-b'>
        <div className='lg:w-1/3'>
          <div className='mb-4 text-4xl font-semibold'>Better writing, better results</div>
          <div className='mb-4 text-lg'>Be perfectly professional, clear, and convincing in a few clicks, not a few hours.</div>
        </div>
        <Image src={'/images/home/better_writing_cartoon.jpg'} alt='LanguageAi Writing' width={350} height={350} className='w-full lg:h-auto' />
      </div>

      <div className='mb-16 lg:flex lg:border-b '>
        <div>
          <div className='mb-4 text-4xl font-semibold'>The right text for the context</div>
          <div className='mb-4 text-lg'>Get personalized suggestions based on what you’re writing and who will read it.</div>
        </div>
        <Image src={'/images/home/right_context_cartoon.jpg'} alt='LanguageAi Right Context' width={350} height={350} className='w-full lg:h-auto' />
      </div>


      <div className='mb-16 lg:flex lg:border-b'>
        <div>
          <div className='mb-4 text-4xl font-semibold'>Works where you work</div>
          <div className='mb-4 text-lg'>LanguageAi works for all writing and languages. Copy and paste without hassle.</div>
        </div>
        <Image src={'/images/home/work_where_cartoon.jpg'} alt='LanguageAi Easiness' width={350} height={350} className='w-full lg:h-auto' />
      </div>

      <div className='mb-16 lg:flex lg:border-b'>
        <div>
          <div className='mb-4 text-4xl font-semibold'>Never go out of style</div>
          <div className='mb-4 text-lg'>LanguageAi understands both your personal style and your brand style guide to help you find your voice..</div>
        </div>
        <Image src={'/images/home/writing_style_cartoon.jpeg'} alt='LanguageAi Style' width={350} height={350} className='w-full mx-auto' />
      </div>
    </div>
  )
}

export default HomeExplanation