import { PiStudentDuotone } from 'react-icons/pi'
import CanvasLink from '@/common/components/ui/CanvasLink'
import { TbCheck, TbCircleCheck } from 'react-icons/tb'

const HomeStudent = () => {
  const STUDENT_ITEM = ['Ai Checkbot', 'Ai Translate', 'Ai Image to Text', 'Ai Text to Speech'];

  return (
    <div className='p-4 text-white bg-emerald-800'>
      <div className='mb-2 text-3xl font-semibold text-center'>Student? Free!</div>
      <div className='mb-8 text-lg text-center'>Languageai.id is built by student for student, apply and enjoy unlimited use</div>
      <CanvasLink href="/plans/students" variant='primary-reverse' className='w-1/2 mx-auto mb-8 text-xl'>
        <PiStudentDuotone />
        Apply Now
      </CanvasLink>

      <div className='mb-2 text-lg'>What you get:</div>
      <ul>
        {STUDENT_ITEM.map((item: string) =>
          <li className='flex items-center justify-between mb-2 text-lg'>
            <div className='flex items-center gap-2'>
              <TbCheck className='bg-white rounded-full text-emerald-800' />
              <span>{item}</span> 
              </div>
            <div>Unlimited</div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default HomeStudent