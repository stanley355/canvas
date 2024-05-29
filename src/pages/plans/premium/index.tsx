import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { decode, JwtPayload } from "jsonwebtoken";
import PlanPremiumCard from "@/modules/plans/components/PlanPremiumCard";
import PlanPremiumForm from "@/modules/plans/components/PlanPremiumForm";
import { fetchStudentDataV2 } from "@/common/lib/apiV2/students/fetchStudentDataV2";

const PremiumPlans = () => {
  return (
    <div className="container px-4 mx-auto mt-16 lg:mt-4">
      <div className="lg:w-1/3 lg:mx-auto">
        <PlanPremiumCard />
        <PlanPremiumForm />
      </div>
    </div>
  );
};

export default PremiumPlans;
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

  const decodedToken = decode(token) as JwtPayload;
  const studentAvailability = await fetchStudentDataV2(decodedToken.id);

  if (studentAvailability?.id) {
    return {
      redirect: {
        permanent: false,
        destination: "/plans/premium/students/",
      },
    };
  }

  return {
    props: {},
  };
};
