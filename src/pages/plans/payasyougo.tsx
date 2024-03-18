import { GetServerSideProps, GetServerSidePropsContext } from "next";
import PlanPayasyougoCard from "@/modules/plans/components/PlanPayasyougoCard";
import PlanPayasyougoForm from "@/modules/plans/components/PlanPayasyougoForm";

const PayasyougoPlans = () => {
  return (
    <div className="container mx-auto mt-16 lg:mt-4">
      <div className="lg:w-1/3 lg:mx-auto">
        <PlanPayasyougoCard />
        <PlanPayasyougoForm />
      </div>
    </div>
  );
};

export default PayasyougoPlans;
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
