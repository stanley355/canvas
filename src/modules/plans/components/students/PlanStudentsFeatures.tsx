import { PLAN_LIST } from "../../lib/constant";

const PlanStudentsFeatures = () => {
  return (
    <div className="px-4 mb-8">
      <div className="pb-4 mb-4 border-b border-brand-primary">
        <h1 className="text-center text-2xl font-bold">Student Premium Plan</h1>
        <div className="text-center">What you get</div>
      </div>

      {PLAN_LIST.student.features.map((feat) => (
        <div className="grid grid-cols-2 mb-4" key={`student_${feat.label}`}>
          <span className="font-semibold">{feat.label}</span>
          <span className="text-right">{feat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default PlanStudentsFeatures;
