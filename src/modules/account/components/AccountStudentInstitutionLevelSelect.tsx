import Select from 'react-select';
import { StudentInstitutionLevel } from '@/common/lib/api/students/fetchStudent'

const AccountStudentInstitutionLevelSelect = () => {
  return (
    <div className='mb-8'>
      <label htmlFor="">Institution Level <span className='text-red-500'>*</span> </label>
      <Select
        options={[
          { label: "Universitas dan sederajat", value: StudentInstitutionLevel.College },
          { label: "SMA dan sederajat", value: StudentInstitutionLevel.SeniorHigh },
          { label: "SMP dan sederajat", value: StudentInstitutionLevel.JuniorHigh },
        ]}
      />
    </div>
  )
}

export default AccountStudentInstitutionLevelSelect