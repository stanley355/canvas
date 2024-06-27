import StudentApplicationForm from '@/modules/students/components/application/StudentApplicationForm';
import React from 'react'

const StudentApplication = () => {
  return (
    <div className='mt-16 p-4 lg:container'>
      <h1 className='text-2xl font-bold text-center mb-4'>Student Plan Application</h1>
      <h2 className='text-center mb-4'>Enter your student information to get unlimited use (1st year) and 50% discount (2nd year)</h2>
      <StudentApplicationForm />
    </div>
  )
}

export default StudentApplication; 