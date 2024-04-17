import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import { ITopup } from "@/common/lib/api/topups/interfaces";
import { IUser } from "@/common/lib/api/users/interfaces";
import AccountFreePlanDetail from "./AccountFreePlanDetail";
import AccountPlanList from "./AccountPlanList";
import AccountPayasyougoPlanDetail from "./AccountPayasyougoPlanDetail";
import AccountPremiumPlanDetail from "./AccountPremiumPlanDetail";
import { IStudent } from "@/common/lib/api/students/interfaces";
import AccountStudentPlanDetail from "./AccountStudentPlanDetail";

interface IAccountPlanDetail {
  account: {
    user: IUser;
    active_student_discount: IStudent;
    active_subscription: ISubscription;
    topups: ITopup[];
  };
}

const AccountPlanDetail = (props: IAccountPlanDetail) => {
  const { account } = props;
  const { user, active_subscription, topups, active_student_discount } = account;

  if (active_student_discount.student_application_valid) {
    return <AccountStudentPlanDetail student={active_student_discount} topups={topups} />
  }

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
