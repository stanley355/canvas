import { useReducer } from 'react'

import { Input } from '@/common/components/ui/input'
import { Button } from '@/common/components/ui/button'
import AccountStudentInstitutionLevelSelect from './AccountStudentInstitutionLevelSelect'
import AccountStudentInstitutionSelect from './AccountStudentInstitutionSelect'
import TnCLink from '@/common/components/TnCLink'

import { accountStudentFormReducer } from '../lib/accountStudentFormReducer'
import { ACCOUNT_STUDENT_FORM_STATES } from '../lib/AccountStudentFormStates'

const AccountStudentForm = () => {
  const [formStates, dispatch] = useReducer(accountStudentFormReducer, ACCOUNT_STUDENT_FORM_STATES);

  return (
    <div className='min-h-screen'>
      <div className='w-full p-1 mt-12 mb-4 font-semibold bg-yellow-300 lg:mt-0 border-y lg:text-center'>Get full one year free as a student, then 50% off for the 2nd year</div>
      <div className='mb-2 text-3xl font-semibold text-center'>Student Plan Application</div>
      <div className='mb-8 text-center'>Enter your information to apply</div>

      <form className='px-4 lg:w-1/4 lg:border lg:rounded-md lg:py-4 lg:mx-auto' onSubmit={(e: React.FormEvent<HTMLFormElement>) => { }}>
        <div className='mb-8'>
          <label htmlFor="student_id">Student ID <span className='text-red-500'>*</span></label>
          <Input type='text' name='student_id' id='student_id_input' placeholder='my id number' />
        </div>
        <div className='mb-8'>
          <label htmlFor="student_email">Student Email (optional)</label>
          <Input type='email' name='student_email' id='student_email_input' placeholder='myname@email.com' />
        </div>

        <AccountStudentInstitutionLevelSelect />
        <AccountStudentInstitutionSelect />


        <div className='mb-8'>
          <label htmlFor="student_id_card">Student ID Card (optional)</label>
          <Input type='file' name='student_id_card' id='student_id_card_input' accept='image/*' />
        </div>

        <Button type='submit' className='w-full p-4 py-6 mb-2'>Submit Application</Button>
        <TnCLink />
      </form>
    </div>
  )
}

export default AccountStudentForm