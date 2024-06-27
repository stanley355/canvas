import NextInput from "@/common/components/NextInput"
import NextLabel from "@/common/components/NextLabel"

const StudentApplicationForm = () => {
  return (
    <form action="">
      <div className="mb-4">
        <NextLabel required htmlFor="studentid_input">Student ID</NextLabel>
        <NextInput placeholder="Student ID" id="studentid_input" name="student_id" />
      </div>
      <div className="mb-4">
        <NextLabel>Student Email</NextLabel>
        <NextInput placeholder="Email" type="email" />
      </div>
    </form>
  )
}

export default StudentApplicationForm