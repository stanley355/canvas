const PlanStudentPremiumCard = () => {
  return (
    <div>
      <div className="pb-4 border-b-2">
        <div className="text-xl font-bold text-center">
          Student Premium Plan
        </div>
        <div className="text-sm text-center">
          Enjoy 50% reduced pricing as student
        </div>
      </div>

      <div className="w-3/4 py-4 mx-auto">
        <div className="mb-4 font-semibold">What to expect?</div>
        <ul className="mb-4 text-gray-500 list-disc">
          <li>Ai Translate</li>
          <li>Ai Grammar Check</li>
          <li>Ai Image to Text</li>
          <li>Ai Text to Speech</li>
          <li>Grammar and Spelling Fix</li>
          <li>Punctuation Fix</li>
          <li>Word choices and suggestions</li>
        </ul>
      </div>
    </div>
  );
};

export default PlanStudentPremiumCard;
