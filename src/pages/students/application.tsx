import { useMemo } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { TbArrowLeft } from "react-icons/tb";

import NextHead from "@/common/components/NextHead";
import NextButton from "@/common/components/NextButton";
import StudentApplicationForm from "@/modules/students/components/application/StudentApplicationForm";
import AccountStudentHalfDiscount from "@/modules/account/components/AccountStudentHalfDiscount";

import { STUDENT_APPLICATION_SEO_SCHEMA } from "@/modules/students/lib/StudentApplicationSeoSchema";
import { getStudentApplicationPageServerProps } from "@/modules/students/lib/getStudentApplicationPageServerSideProps";
import { IStudent } from "@/common/lib/api/students/interfaces";

export const getServerSideProps: GetServerSideProps =
  getStudentApplicationPageServerProps;

interface StudentApplicationProps {
  student: IStudent;
}

const StudentApplication = (props: StudentApplicationProps) => {
  const { student } = props;
  const router = useRouter();

  const isHalfDiscount = useMemo(() => {
    const currentTime = new Date().getTime();
    const halfDiscTime = new Date(student.half_discount_end_at).getTime();
    return halfDiscTime > currentTime;
  }, [student]);

  if (isHalfDiscount) {
    return <AccountStudentHalfDiscount />;
  }

  return (
    <div className=" p-4 lg:w-[400px] lg:mx-auto">
      <NextHead pagesSchema={STUDENT_APPLICATION_SEO_SCHEMA} />
      <h1 className="text-2xl font-bold text-center mb-4">
        Student Plan Application
      </h1>
      <h2 className="text-center mb-4">
        Enter your student information to get <b>free & unlimited</b> use of
        Languageai
      </h2>
      <StudentApplicationForm />
      <NextButton
        variant="outline"
        className="border-transparent p-2"
        onClick={() => router.back()}
      >
        <TbArrowLeft />
        <span>Back</span>
      </NextButton>
    </div>
  );
};

export default StudentApplication;
