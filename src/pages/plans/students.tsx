import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { TbArrowLeft } from "react-icons/tb";
import NextHead from "@/common/components/NextHead";
import NextButton from "@/common/components/NextButton";

import { getPlanStudentPageServerProps } from "@/modules/plans/lib/getPlanStudentPageServerProps";
import PlanStudentsFeatures from "@/modules/plans/components/students/PlanStudentsFeatures";
import PlanStudentsForm from "@/modules/plans/components/students/PlanStudentsForm";

import { IStudent } from "@/common/lib/api/students/interfaces";
import { IDatoPagesSchema } from "@/common/lib/api/dato/interfaces";

export const getServerSideProps: GetServerSideProps =
  getPlanStudentPageServerProps;

interface StudentsPlansProps {
  student: IStudent;
}

const StudentsPlans = (props: StudentsPlansProps) => {
  const { student } = props;
  const router = useRouter();

  const schema: IDatoPagesSchema = {
    _updatedAt: "",
    slug: "/plans/students/",
    keywords: "",
    seo: {
      title: `Student Plans`,
      description: "Enjoy 1 year unlimited access and 50% off on the 2nd year",
      image: {
        alt: "Languageai.id",
        url: "/images/languageai/logo.png",
      },
    },
  };

  return (
    <div className="container mt-14 lg:mt-0 lg:w-1/3 pb-8">
      <NextHead pagesSchema={schema} />
      <div className="bg-yellow-500 p-4 mb-4">
        Your free student plan has ended on{" "}
        <i>
          {new Date(student.free_discount_end_at).toLocaleDateString("id-ID")}
        </i>
        , but you can enjoy student pricing <b>(50% discount)</b> until{" "}
        <i>
          {new Date(student.half_discount_end_at).toLocaleDateString("id-id")}
        </i>
      </div>
      <PlanStudentsFeatures />
      <PlanStudentsForm />
      <NextButton
        variant="outline"
        className="border-transparent p-2 mt-4 pl-4"
        onClick={() => router.back()}
      >
        <TbArrowLeft />
        <span>Back</span>
      </NextButton>
    </div>
  );
};

export default StudentsPlans;
