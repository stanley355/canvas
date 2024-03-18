import PlanPremiumCard from "@/modules/plans/components/PlanPremiumCard"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

const PremiumPlans= () => {
  return (
    <div className="container mx-auto mt-16 lg:mt-4">
      <div className="lg:w-1/3 lg:mx-auto">
        <PlanPremiumCard />
      </div>
    </div>
  )
}

export default PremiumPlans 
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

  return {
    props: {},
  };
}