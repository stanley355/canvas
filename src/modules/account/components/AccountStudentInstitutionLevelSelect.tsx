import Select from "react-select";
import { StudentInstitutionLevel } from "@/common/lib/apiV2/students/fetchStudentV2";

const AccountStudentInstitutionLevelSelect = () => {
  return (
    <div className="mb-8">
      <label htmlFor="institution_level">
        Institution Level <span className="text-red-500">*</span>{" "}
      </label>
      <Select
        id="institution_level_select"
        name="institution_level"
        options={[
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
        ]}
      />
    </div>
  );
};

export default AccountStudentInstitutionLevelSelect;
