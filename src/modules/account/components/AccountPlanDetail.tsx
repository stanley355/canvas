import Link from "next/link";
import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import { ITopup } from "@/common/lib/api/topups/interfaces";
import { IUser } from "@/common/lib/api/users/interfaces";
import AccountFreePlanDetail from "./AccountFreePlanDetail";
import AccountPlanList from "./AccountPlanList";
import AccountPayasyougoPlanDetail from "./AccountPayasyougoPlanDetail";
import AccountPremiumPlanDetail from "./AccountPremiumPlanDetail";

interface IAccountPlanDetail {
  account: {
    user: IUser;
    active_subscription: ISubscription;
    topups: ITopup[];
  };
}

const AccountPlanDetail = (props: IAccountPlanDetail) => {
  const { account } = props;
  const { user, active_subscription, topups } = account;

  if (active_subscription && active_subscription?.id) {
    return (
      <AccountPremiumPlanDetail
        subscription={active_subscription}
        topups={topups}
      />
    );
  }

  if (user.balance > 0) {
    return <AccountPayasyougoPlanDetail user={user} topups={topups} />;
  }

  return (
    <div>
      <AccountFreePlanDetail />
      <AccountPlanList />
    </div>
  );
};

export default AccountPlanDetail;
