import NextLabel from "@/common/components/NextLabel"
import NextSelect from "@/common/components/NextSelect"
import { StudentInstitutionLevel } from "../../lib/StudentInstitutionLevel"

const StudentInstitutionLevelField = () => {
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
      <NextLabel htmlFor="studentinstitution_input_level" required>Institution Level</NextLabel>
      <NextSelect options={INSTITUTION_LEVEL_OPTIONS}selectClassname="border-brand-primary" />
    </div>
  )
}

export default StudentInstitutionLevelField