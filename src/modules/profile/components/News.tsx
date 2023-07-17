import Accordion from '@/common/components/Accordion';
import ComparisonTable from '@/common/components/ComparisonTable';
import ReferralPromo from '@/common/components/ReferralPromo';
import { CHECKBOT_COMPARISON } from '@/modules/checkbot/lib/constant';
import { TRANSLATE_COMPARISON } from '@/modules/translate/lib/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCameraRetro, FaClock, FaLanguage, FaMoneyBill, FaRobot } from 'react-icons/fa';

const ProfileNews = () => {

  const NEWS_LIST = [
    {
      title: <div className='flex items-center gap-2'>
        <FaMoneyBill className='text-xl text-green-500' />
        <span>NEW! Premium for free!</span>
      </div>,
      children: <ReferralPromo />
    },
    {
      title: <div className='flex items-center gap-2'>
        <FaClock className='text-xl text-blue-500' />
        <span>NEW! History is Made!</span>
      </div>,
      children: <div>
        <div>You can now see your previous history on <Link href="/translate" className='text-blue-500 underline'>Translate</Link> and <Link href="/checkbot" className='text-blue-500 underline'>Checkbot</Link> Pages.</div>
        <div>The HOW? Simply click the button below on the pages</div>
        <Image src="/images/news/show_history_cta.png" alt='Image to Text' width={400} height={400} className='w-full h-auto rounded' />
      </div>
    },
    {
      title: <div className='flex items-center gap-2'>
        <FaCameraRetro className='text-xl' />
        <span>Image To Text Translate</span>
      </div>,
      children: <div>
        <div className='mb-2'>You can now Translate a text from Image directly in Our Platform Here's how:</div>
        <div className='mb-2'>
          <div>1. On the top right corner of the <Link href="/translate/" className='text-blue-500 underline'>Translate Page</Link>, change Text Translation to Image Translation</div>
          <Image src="/images/news/img_to_text_toggle.png" alt='Image to Text' width={400} height={400} className='w-full h-auto rounded' />
        </div>
        <div className='mb-2'>
          <div>2. Select the Language of the image and Upload the image</div>
          <Image src="/images/news/select_img_lang.png" alt='Image to Text' width={400} height={400} className='w-full h-auto rounded' />
        </div>
        <div className='mb-2'>
          <div>3. Image will be processed</div>
          <Image src="/images/news/img_process.png" alt='Image to Text' width={400} height={400} className='w-full h-auto rounded' />
        </div>
        <div className='mb-2'>
          <div>4. AND Done! The text on the image is ready to be translated</div>
          <Image src="/images/news/img_text_done.png" alt='Image to Text' width={400} height={400} className='w-full h-auto rounded' />
        </div>
      </div>
    },
    {
      title: <div className='flex items-center gap-2'>
        <FaRobot className='text-xl' />
        <span>Premium Checkbot</span>
      </div>,
      children: <div>
        <div>Premium Checkbot is Now Available, what's the difference?</div>
        <ComparisonTable comparisons={CHECKBOT_COMPARISON} />
        <div className='mt-2'>Access Premium Checkbot <Link href="/premium/checkbot" className='text-blue-500 underline'>Here!</Link> </div>
      </div>
    },
    {
      title: <div className='flex items-center gap-2'>
        <FaLanguage className='text-xl' />
        <span>Premium Translation</span>
      </div>,
      children: <div>
        <div>Premium Translation is Now Available, what's the difference?</div>
        <ComparisonTable comparisons={TRANSLATE_COMPARISON} />
        <div className='mt-2'>Access Premium Translate <Link href="/premium/translate" className='text-blue-500 underline'>Here!</Link> </div>
      </div>
    },
  ]


  return (
    <div className='bg-white text-black w-full p-2'>
      <div className='text-xl font-bold mb-4'>NEW Features, FOR YOU!</div>
      {
        NEWS_LIST.map((news: any, index: number) => <Accordion key={index} title={news.title} children={news.children} />)
      }
    </div>
  )
};

export default ProfileNews;