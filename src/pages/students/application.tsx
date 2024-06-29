import { useRouter } from 'next/router';
import StudentApplicationForm from '@/modules/students/components/application/StudentApplicationForm';
import NextButton from '@/common/components/NextButton';
import { TbArrowLeft } from 'react-icons/tb';

const StudentApplication = () => {
  const router = useRouter();
  return (
    <div className=' p-4 lg:w-[400px] lg:mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-4'>Student Plan Application</h1>
      <h2 className='text-center mb-4'>Enter your student information to get <b>free & unlimited</b> use of Languageai</h2>
      <StudentApplicationForm />
      <NextButton variant='outline' className='border-transparent p-2' onClick={()=> router.back()}>
        <TbArrowLeft />
        <span>Back</span>
      </NextButton>
    </div>
  )
}

export default StudentApplication; 