import Select from 'react-select';
import { IAccountStudentFormStates } from '../lib/AccountStudentFormStates';
import { IAccountStudentFormAction } from '../lib/accountStudentFormReducer';
import { Input } from '@/common/components/ui/input';
import { ReactSelectSingleValue } from '@/common/lib/types';
import { ChangeEvent, useState } from 'react';

interface IAccountStudentInstitutionSelect {
  dispatch: (action: IAccountStudentFormAction) => void;
}

const AccountStudentInstitutionSelect = (props: IAccountStudentInstitutionSelect) => {
  const { dispatch } = props;
  const [showInput, setShowInput] = useState(false);

  const handleChange = (e: ReactSelectSingleValue) => {
    const value = e?.value;
    dispatch({ name: "institutionName", value: e?.value });
    setShowInput(value === "");
    return;
  }

  return (
    <div >
      <label htmlFor="institution_name">School / University Name <span className='text-red-500'>*</span> </label>
      <Select
        id='institution_name_select'
        name='institution_name'
        className='mb-8'
        onChange={handleChange}
        options={[
          { label: "UNIKA Atma Jaya Jakarta", value: "UNIKA Atma Jaya Jakarta", },
          { label: "Sekolah Sentosa Jakarta", value: "Sekolah Sentosa Jakarta", },
          { label: "Sekolah Karunia Jakarta", value: "Sekolah Karunia Jakarta", },
          { label: "Lainnya", value: "", }
        ]}
      />
      {showInput &&
        <div className='mb-8'>
          <label htmlFor="institution_name">Please input your School / University Name <span className='text-red-500'>*</span> </label>
          <Input type='text' name='institution_name' id='institution_name_input' onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({ name: "institutionName", value: e.target.value })} />
        </div>}
    </div>
  )
}

export default AccountStudentInstitutionSelect