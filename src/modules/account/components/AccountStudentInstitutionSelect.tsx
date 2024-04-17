import Select from 'react-select';

const AccountStudentInstitutionSelect = () => {
  return (
    <div >
      <label htmlFor="">School / University Name <span className='text-red-500'>*</span> </label>
      <Select 
      className='mb-8'
      options={[
        {label: "UNIKA Atma Jaya Jakarta", value: "UNIKA Atma Jaya Jakarta",},
        {label: "Sekolah Sentosa Jakarta", value: "Sekolah Sentosa Jakarta",},
        {label: "Sekolah Karunia Jakarta", value: "Sekolah Karunia Jakarta",},
        {label: "Lainnya", value: "others",}
      ]}
      />
    </div>
  )
}

export default AccountStudentInstitutionSelect