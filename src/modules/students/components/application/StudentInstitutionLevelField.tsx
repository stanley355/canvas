import { memo } from "react"
import NextLabel from "@/common/components/NextLabel"
import NextSelect from "@/common/components/NextSelect"
import { StudentInstitutionLevel } from "../../lib/StudentInstitutionLevel"

interface StudentInstitutionLevelFieldProps {
  setInstitutionLevel: (level: string) => void;
}

const StudentInstitutionLevelField = (props: StudentInstitutionLevelFieldProps) => {
  const { setInstitutionLevel } = props;

  const INSTITUTION_LEVEL_OPTIONS = [
    {
      label: "Universitas dan sederajat",
      value: StudentInstitutionLevel.College,
    },
    {
      label: "SMA dan sederajat",
      value: StudentInstitutionLevel.SeniorHigh,
    },
    {
      label: "SMP dan sederajat",
      value: StudentInstitutionLevel.JuniorHigh,
    },
  ]
  return (
    <div className="mb-4">
      <NextLabel htmlFor="studentinstitution_input_level" required>School/University Level</NextLabel>
      <NextSelect options={INSTITUTION_LEVEL_OPTIONS} selectClassname="border-brand-primary"
      onChange={(option)=> setInstitutionLevel(option.value)}
      />
    </div>
  )
}

export default memo(StudentInstitutionLevelField)