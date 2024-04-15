import Link from "next/link";
import { useRouter } from "next/router";

const AccountFreePlanDetail = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-4 text-2xl font-bold border-b">Subscription</div>
      <button type="button"
        onClick={() => { router.push("/plans/students/") }}
        className="p-2 mb-4 text-sm text-left bg-yellow-300 border w-fit">
        Are you a student? Apply here for free<span className="ml-1 text-blue-500 underline">Student Plan </span>
      </button>
      <div className="mb-4 text-xl font-bold">Plan Details</div>
      <div className="pb-2 mb-2">
        <div className="mb-2 text-gray-500">Your Plan</div>
        <div className="flex items-center gap-12">
          <div>Free Plan</div>
          <Link
            href={"/plans/"}
            className="font-bold text-blue-700 border-b border-b-transparent hover:border-b-blue-700"
          >
            Change
          </Link>
        </div>
      </div>

      <div className="w-full p-2 text-sm bg-blue-100 lg:w-1/2">
        Change your Plan to enjoy full feature. Choose a plan to ensure that
        everything you write is clear, engaging, and polished.
      </div>
    </div>
  );
};

export default AccountFreePlanDetail;
