import { IStudent } from "@/common/lib/api/students/interfaces";
import { StudentInstitutionLevel } from "@/common/lib/apiV2/students/fetchStudentV2";
import AccountStudentCantReapply from "@/modules/account/components/AccountStudentCantReapply";
import AccountStudentForm from "@/modules/account/components/AccountStudentForm";
import AccountStudentFreeDiscount from "@/modules/account/components/AccountStudentFreeDiscount";
import AccountStudentHalfDiscount from "@/modules/account/components/AccountStudentHalfDiscount";
import { getAccountStudentPageServerProps } from "@/modules/account/lib/getAccountStudentPageServerSideProps";
import { GetServerSideProps } from "next";
import { useMemo } from "react";

interface IAccountStudents {
  student: IStudent;
}

const AccountStudents = (props: IAccountStudents) => {
  const { student } = props;

  const isFreeDiscount = useMemo(() => {
    const currentTime = new Date().getTime();
    const freeDiscTime = new Date(student.free_discount_end_at).getTime();
    return freeDiscTime > currentTime;
  }, [student]);
  const isHalfDiscount = useMemo(() => {
    const currentTime = new Date().getTime();
    const halfDiscTime = new Date(student.half_discount_end_at).getTime();
    return halfDiscTime > currentTime;
  }, [student]);
  if (
    !isFreeDiscount &&
    !isHalfDiscount &&
    student.institution_level === StudentInstitutionLevel.College
  ) {
    return <AccountStudentCantReapply />;
  }

  if (isFreeDiscount) {
    return <AccountStudentFreeDiscount />;
  }

  if (isHalfDiscount) {
    return <AccountStudentHalfDiscount />;
  }

  return <AccountStudentForm />;
};

export default AccountStudents;
export const getServerSideProps: GetServerSideProps =
  getAccountStudentPageServerProps;
