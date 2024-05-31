import CanvasButton from '@/common/components/ui/CanvasButton'
import CanvasLink from '@/common/components/ui/CanvasLink'
import { PiStackDuotone, PiStudentDuotone } from 'react-icons/pi'

const HomeMobileStudent = () => {
  return (
    <div className='p-4 text-white bg-emerald-800'>
      <div className='mb-2 text-3xl font-semibold text-center'>Student? Free!</div>
      <div className='mb-8 text-lg text-center'>Languageai.id is built by student for student, apply and enjoy unlimited use</div>
      <CanvasLink href="/plans/students" variant='primary-reverse' className='w-1/2 mx-auto mb-8 text-xl'>
        <PiStudentDuotone />
        Apply Now
      </CanvasLink>
    </div>
  )
}

export default HomeMobileStudent