import { GetServerSideProps, GetServerSidePropsContext } from "next";
import PlanStudentPremiumCard from "@/modules/plans/components/PlanStudentPremiumCard";
import PlanStudentPremiumForm from "@/modules/plans/components/PlanStudentPremiumForm";

const PremiumStudentPlans = () => {
  return (
    <div className="container mx-auto mt-16 lg:mt-4">
      <div className="fixed left-0 w-full p-2 text-center bg-yellow-300 border top-12 lg:text-sm lg:static lg:w-fit lg:mx-auto ">
        System detected you have 50% student dicount, enjoy your reduced pricing
      </div>
      <div className="lg:w-1/3 lg:mx-auto">
        <PlanStudentPremiumCard />
        <PlanStudentPremiumForm />
      </div>
    </div>
  );
};

export default PremiumStudentPlans;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/",
      },
    };
  }

  return {
    props: {},
  };
};
