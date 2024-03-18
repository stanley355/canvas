import PlanPayasyougoCard from "@/modules/plans/components/PlanPayasyougoCard";
import PlanPayasyougoForm from "@/modules/plans/components/PlanPayasyougoForm";
import { JwtPayload, decode } from "jsonwebtoken";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const PayasyougoPlans = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="lg:w-1/3 lg:mx-auto">
        <PlanPayasyougoCard />
        <PlanPayasyougoForm />
      </div>
    </div>
  )
}

export default PayasyougoPlans;
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/",
      },
    };
  }

  const user = decode(token) as JwtPayload;

  return {
    props: {
      user,
    },
  };
}