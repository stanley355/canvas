import { StudentInstitutionLevel } from "@/common/lib/api/students/fetchStudent";
import AccountStudentCantReapply from "@/modules/account/components/AccountStudentCantReapply";
import AccountStudentForm from "@/modules/account/components/AccountStudentForm";
import AccountStudentFreeDiscount from "@/modules/account/components/AccountStudentFreeDiscount";
import AccountStudentHalfDiscount from "@/modules/account/components/AccountStudentHalfDiscount";
import { getAccountStudentPageServerProps } from "@/modules/account/lib/getAccountStudentPageServerSideProps";
import { GetServerSideProps } from "next";

interface IAccountStudents {
  studentAvailability: {
    is_free_discount: boolean;
    is_half_discount: boolean
    is_student: boolean
    last_institution_level: string
  }
}

const AccountStudents = (props: IAccountStudents) => {
  const { studentAvailability } = props;

  if (!studentAvailability.is_free_discount &&
    !studentAvailability.is_half_discount &&
    studentAvailability.last_institution_level === StudentInstitutionLevel.College) {
    return <AccountStudentCantReapply />
  }

  if (studentAvailability.is_student && studentAvailability.is_free_discount) {
    return <AccountStudentFreeDiscount />
  }

  if (studentAvailability.is_student && studentAvailability.is_half_discount) {
    return <AccountStudentHalfDiscount />
  }

  return <AccountStudentForm />
}

export default AccountStudents;
export const getServerSideProps: GetServerSideProps = getAccountStudentPageServerProps;