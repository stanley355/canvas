import Image from 'next/image'
import React from 'react'

const StudentsHeroSupport = () => {
  return (
    <div className='container px-4 pb-8 mx-auto mt-20 text-white lg:grid lg:grid-cols-4 lg:mt-4 lg:gap-4'>
      <div className='mb-8'>
        <Image
          width={100}
          height={100}
          src="/images/students/clock.svg"
          alt='LanguageAi Student Clock'
          className='mb-4'
        />
        <div>Submit flawless writing with built-in proofreading that catches mistakes and improves clarity.</div>
      </div>
      <div className='mb-8'>
        <Image
          width={100}
          height={100}
          src="/images/students/lamp.svg"
          alt='LanguageAi Student Lamp'
          className='mb-4'
        />
        <div>Develop your best ideas and fine-tune your delivery faster with generative AI.</div>
      </div>
      <div className='mb-8'>
        <Image
          width={100}
          height={100}
          src="/images/students/laptop.svg"
          alt='LanguageAi Student Laptop'
          className='mb-4'
        />
        <div>Ensure that your work is uniquely yours with plagiarism detection and citation support, including for AI use.</div>
      </div>

      <div className='mb-8'>
        <Image
          width={100}
          height={100}
          src="/images/students/folder.svg"
          alt='LanguageAi Student Folder'
          className='mb-4'
        />
        <div>Stay focused with a seamless writing partner that works in all the work you will do in class and career.</div>
      </div>
    </div>
  )
}

export default StudentsHeroSupport