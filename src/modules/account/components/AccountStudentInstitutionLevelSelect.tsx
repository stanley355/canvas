import Select from 'react-select';
import { StudentInstitutionLevel } from '@/common/lib/api/students/fetchStudent'
import { IAccountStudentFormAction } from '../lib/accountStudentFormReducer';
import { ReactSelectSingleValue } from '@/common/lib/types';


interface IAccountStudentInstitutionLevelSelect {
  dispatch: (action: IAccountStudentFormAction) => void
}

const AccountStudentInstitutionLevelSelect = (props: IAccountStudentInstitutionLevelSelect) => {
  const { dispatch } = props;

  return (
    <div className='mb-8'>
      <label htmlFor="institution_level">Institution Level <span className='text-red-500'>*</span> </label>
      <Select
        id='institution_level_select'
        name='institution_level'
        onChange={(e: ReactSelectSingleValue) => dispatch({ name: "institutionLevel", value: e?.value })}
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