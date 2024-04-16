import { getAccountStudentPageServerProps } from "@/modules/account/lib/getAccountStudentPageServerSideProps";
import { GetServerSideProps } from "next";

const AccountStudents = () => {
  return <div></div>
}

export default AccountStudents;
export const getServerSideProps: GetServerSideProps = getAccountStudentPageServerProps;