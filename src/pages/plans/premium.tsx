import { GetServerSideProps } from "next";
import { getPlanPremiumPageServerProps } from "@/modules/plans/lib/getPlanPremiumPageServerProps";
import PlanPremiumCard from "@/modules/plans/components/PlanPremiumCard";
import PlanPremiumForm from "@/modules/plans/components/PlanPremiumForm";

export const getServerSideProps: GetServerSideProps = getPlanPremiumPageServerProps;

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