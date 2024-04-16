import { Input } from '@/common/components/ui/input'
import AccountStudentInstitutionLevelSelect from './AccountStudentInstitutionLevelSelect'

const AccountStudentForm = () => {
  return (
    <div>
      <div className='w-full p-1 mt-12 mb-4 font-semibold bg-yellow-300 border-y'>Get full one year free as a student, then 50% off for the 2nd year</div>
      <div className='mb-2 text-3xl font-semibold text-center'>Student Plan Application</div>
      <div className='mb-8 text-center'>Enter your information to apply</div>

      <form className='px-2' onSubmit={(e: React.FormEvent<HTMLFormElement>) => { }}>
        <div className='mb-8'>
          <label htmlFor="student_id">Student ID <span className='text-red-500'>*</span></label>
          <Input type='text' name='student_id' id='student_id_input' />
        </div>
        <div className='mb-8'>
          <label htmlFor="student_email">Student Email <span className='text-red-500'>*</span></label>
          <Input type='email' name='student_email' id='student_email_input' />
        </div>

        <AccountStudentInstitutionLevelSelect />
      </form>
    </div>
  )
}

export default AccountStudentForm