import Link from "next/link";
import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import AccountSubscriptionsTable from "./AccountSubscriptionsTable";

interface IAccountPayasyougoPlanDetail {
  subscription: ISubscription;
  subscriptions: ISubscription[];
}

const AccountPremiumPlanDetail = (props: IAccountPayasyougoPlanDetail) => {
  const { subscription, subscriptions } = props;

  return (
    <div className="pb-4">
      <div className="mb-4 text-2xl font-bold border-b">Subscription</div>

      <div className="mb-4 text-xl font-bold">Plan Details</div>
      <div className="mb-4">
        <div className="mb-2 text-gray-500">Your Plan</div>
        <div className="flex items-center gap-12 mb-2">
          <div>Premium ({subscription.duration_type})</div>
          <Link
            href={"/plans/"}
            className="font-bold text-blue-700 border-b border-b-transparent hover:border-b-blue-700"
          >
            Change
          </Link>
        </div>

        <div className="mb-2 text-gray-500">Premium start date</div>
        <div className="mb-2">
          {new Date(subscription.start_at).toLocaleDateString("id-ID")}
        </div>
        <div className="mb-2 text-gray-500">Premium end date</div>
        <div>{new Date(subscription.end_at).toLocaleDateString("id-ID")}</div>
      </div>

      <div className="w-full p-2 mb-4 text-sm bg-blue-100 lg:w-1/2">
        Your usage is unlimited until the end of your plan
      </div>

      {subscriptions?.length > 0 && (
        <AccountSubscriptionsTable subscriptions={subscriptions} />
      )}
    </div>
  );
};

export default AccountPremiumPlanDetail;
