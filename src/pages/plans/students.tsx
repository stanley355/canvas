import { GetServerSideProps } from "next";
import { getPlanStudentPageServerProps } from "@/modules/plans/lib/getPlanStudentPageServerProps";
import { IStudent } from "@/common/lib/api/students/interfaces";
import PlanStudentsFeatures from "@/modules/plans/components/students/PlanStudentsFeatures";
import PlanStudentsForm from "@/modules/plans/components/students/PlanStudentsForm";

export const getServerSideProps: GetServerSideProps = getPlanStudentPageServerProps;

interface StudentsPlansProps {
  student: IStudent
}

const StudentsPlans = (props: StudentsPlansProps) => {
  const {student} = props;

  return (
    <div className="container mt-14 lg:mt-0 lg:w-1/4">
      <div className="bg-yellow-500 p-4 mb-4">
        Your free student plan has ended on <i>{new Date(student.free_discount_end_at).toLocaleDateString('id-ID')}</i>, 
        but you can enjoy student pricing <b>(50% discount)</b> until <i>{new Date(student.half_discount_end_at).toLocaleDateString('id-id')}</i>
      </div>
      <PlanStudentsFeatures />
      <PlanStudentsForm />
    </div>
  )
}

export default StudentsPlans;
