import NextInput from "@/common/components/NextInput"
import NextLabel from "@/common/components/NextLabel"
import NextSelect from "@/common/components/NextSelect"

const StudentApplicationForm = () => {
  const options = [
    {
      label: "woi",
      value: "woi"
    },
    {
      label: "woi",
      value: "woi"
    },
  ];

  return (
    <form action="" className="h-screen">
      <div className="mb-4">
        <NextLabel required htmlFor="studentid_input">Student ID</NextLabel>
        <NextInput placeholder="Student ID" id="studentid_input" name="student_id" className="border-black" />
      </div>
      <div className="mb-4">
        <NextLabel htmlFor="studentemail_input">Student Email</NextLabel>
        <NextInput placeholder="Email" type="email" id="studentemail_input" name="student_email" className="border-black" />
      </div>

      <div className="mb-4">
        <NextLabel htmlFor="studentinstitution_input_level" required>Institution Level</NextLabel>
        <NextSelect options={options} selectClassname="border-black" />
      </div>
    </form>
  )
}

export default StudentApplicationForm