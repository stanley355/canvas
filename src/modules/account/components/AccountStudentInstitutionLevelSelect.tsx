import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/common/components/ui/select'
import { StudentInstitutionLevel } from '@/common/lib/api/students/fetchStudent'

const AccountStudentInstitutionLevelSelect = () => {
  return (
    <div className='mb-8'>
      <label htmlFor="">Institution Level <span className='text-red-500'>*</span> </label>
      <Select onValueChange={(value: string) => { }}>
        <SelectTrigger >
          <SelectValue placeholder="Select institution level" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value={StudentInstitutionLevel.College}>
            Universitas dan sederajat
          </SelectItem>
          <SelectItem value={StudentInstitutionLevel.SeniorHigh}>
            SMA dan sederajat
          </SelectItem>
          <SelectItem value={StudentInstitutionLevel.JuniorHigh}>
            SMP dan sederajat
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default AccountStudentInstitutionLevelSelect