import PlanHomePlanList from "@/modules/plans/components/PlanHomePlanList";
import PlanHomeStatistic from "@/modules/plans/components/PlanHomeStatistic";

const Plans = () => {
  return (
    <div className="container px-6 mx-auto mt-24 lg:mt-4 lg:px-12">
      <div className="mb-8 text-3xl font-bold text-center">
        Great Writing Starts with a Plan
      </div>

      <PlanHomeStatistic />
      <PlanHomePlanList />
    </div>
  );
};

export default Plans;
