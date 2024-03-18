import PlanPayasyougoCard from "@/modules/plans/components/PlanPayasyougoCard";
import { JwtPayload, decode } from "jsonwebtoken";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const PayasyougoPlans = () => {
  return (
    <div className="container mx-auto mt-16">
      <PlanPayasyougoCard />
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