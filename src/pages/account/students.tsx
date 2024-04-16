import AccountStudentForm from "@/modules/account/components/AccountStudentForm";
import { getAccountStudentPageServerProps } from "@/modules/account/lib/getAccountStudentPageServerSideProps";
import { GetServerSideProps } from "next";

interface IAccountStudents {
  studentAvailability: Record<string, boolean>
}

const AccountStudents = (props: IAccountStudents) => {
  const {studentAvailability} = props;
  // is_student && !if_free_discount && !is_half_discount && can_reapply 
  // !is_student && can_reapply
  return <AccountStudentForm />
}

export default AccountStudents;
export const getServerSideProps: GetServerSideProps = getAccountStudentPageServerProps;