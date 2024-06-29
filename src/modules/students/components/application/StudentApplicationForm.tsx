import NextInput from "@/common/components/NextInput"
import NextLabel from "@/common/components/NextLabel"
import StudentInstitutionLevelField from "./StudentInstitutionLevelField"
import NextButton from "@/common/components/NextButton"
import { useState } from "react"
import { toast } from "react-toastify"
import { EMAIL_REGEX } from "@/common/lib/regex"
import { getStorage, ref, uploadBytes } from "firebase/storage"

const StudentApplicationForm = () => {
  const [institutionLevel, setInstitutionLevel] = useState("");

  const handleAction = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    const target = formEvent.target as any;
    const {
      student_id,
      student_email,
      institution_name,
      student_id_card
    } = target;

    if (!student_id.value || !institutionLevel || !institution_name.value) {
      toast.error("Please complete all required field");
      return;
    }

    if (
      student_email.value &&
      !student_email.value.match(EMAIL_REGEX)
    ) {
      toast.error("Please input correct email");
      return;
    }

    const file = student_id_card.files[0];
    const studentIdCardPath = `student_card/${institutionLevel}/${student_id.value}`;
    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, studentIdCardPath);
      await uploadBytes(storageRef, file);
    }



  }

  return (
    <form onSubmit={handleAction} className="mb-4">
      <div className="mb-4">
        <NextLabel required htmlFor="studentid_input">Student ID</NextLabel>
        <NextInput placeholder="Student ID" id="studentid_input" name="student_id" className="border-brand-primary" />
      </div>
      <div className="mb-4">
        <NextLabel htmlFor="studentemail_input">Student Email</NextLabel>
        <NextInput placeholder="Email" type="email" id="studentemail_input" name="student_email" className="border-brand-primary" />
      </div>
      <StudentInstitutionLevelField setInstitutionLevel={setInstitutionLevel} />
      <div className="mb-4">
        <NextLabel required htmlFor="institution_input">School/University Name</NextLabel>
        <NextInput placeholder="School/University Name" id="institution_input" name="institution_name" className="border-brand-primary" />
      </div>
      <div className="mb-4">
        <NextLabel htmlFor="studentidcard_input">Student ID Card (Optional)</NextLabel>
        <NextInput type="file" id="studentidcard_input" name="student_id_card" className="border-brand-primary" />
      </div>
      <NextButton className="w-full justify-center text-lg mb-4" type="submit">Submit</NextButton>
      <div className="text-center">
        By signing up, you agree to the <b>Terms and Conditions</b> and{" "}
        <b> Privacy Policy</b>.
      </div>
    </form>
  )
}

export default StudentApplicationForm