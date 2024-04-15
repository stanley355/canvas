import Link from "next/link";
import { useRouter } from "next/router";
import { ITopup } from "@/common/lib/api/topups/interfaces";
import { IUser } from "@/common/lib/api/users/interfaces";
import AccountTopupTable from "./AccountTopupTable";

interface IAccountPayasyougoPlanDetail {
  user: IUser;
  topups: ITopup[];
}

const AccountPayasyougoPlanDetail = (props: IAccountPayasyougoPlanDetail) => {
  const { user, topups } = props;
  const router = useRouter();

  return (
    <div className="pb-4">
      <div className="mb-4 text-2xl font-bold border-b">Subscription</div>
      <button type="button"
        onClick={() => { router.push("/plans/students/") }}
        className="p-2 mb-4 text-sm text-left bg-yellow-300 border w-fit">
        Are you a student? Apply here for free<span className="ml-1 text-blue-500 underline">Student Plan </span>
      </button>
      <div className="mb-4 text-xl font-bold">Plan Details</div>
      <div className="mb-4">
        <div className="mb-2 text-gray-500">Your Plan</div>
        <div className="flex items-center gap-12 mb-2">
          <div>Pay as You Go</div>
          <Link
            href={"/plans/"}
            className="font-bold text-blue-700 border-b border-b-transparent hover:border-b-blue-700"
          >
            Change
          </Link>
        </div>

        <div className="mb-2 text-gray-500">Pay as You Go Balance</div>
        <div>Rp {user.balance}</div>
      </div>

      <div className="w-full p-2 mb-4 text-sm bg-blue-100 lg:w-1/2">
        Your credit amount will change according to your usage
      </div>

      {topups && topups?.length > 0 && <AccountTopupTable topups={topups} />}
    </div>
  );
};

export default AccountPayasyougoPlanDetail;
