import NextInput from "@/common/components/NextInput"
import NextLabel from "@/common/components/NextLabel"
import StudentInstitutionLevelField from "./StudentInstitutionLevelField"

const StudentApplicationForm = () => {
  return (
    <form action="" className="h-screen">
      <div className="mb-4">
        <NextLabel required htmlFor="studentid_input">Student ID</NextLabel>
        <NextInput placeholder="Student ID" id="studentid_input" name="student_id" className="border-brand-primary" />
      </div>
      <div className="mb-4">
        <NextLabel htmlFor="studentemail_input">Student Email</NextLabel>
        <NextInput placeholder="Email" type="email" id="studentemail_input" name="student_email" className="border-brand-primary" />
      </div>
      <StudentInstitutionLevelField />
      <div className="mb-4">
        <NextLabel required htmlFor="institution_input">School/University Name</NextLabel>
        <NextInput placeholder="School/University Name" id="institution_input" name="institution" className="border-brand-primary" />
      </div>
      <div className="mb-4">
        <NextLabel htmlFor="studentidcard_input">Student ID Card (Optional)</NextLabel>
        <NextInput type="file" id="studentidcard_input" name="student_id_card" className="border-brand-primary" />
      </div>
    </form>
  )
}

export default StudentApplicationForm