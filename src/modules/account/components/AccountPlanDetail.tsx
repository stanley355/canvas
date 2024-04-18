import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import { ITopup } from "@/common/lib/api/topups/interfaces";
import { IUser } from "@/common/lib/api/users/interfaces";
import AccountFreePlanDetail from "./AccountFreePlanDetail";
import AccountPlanList from "./AccountPlanList";
import AccountPayasyougoPlanDetail from "./AccountPayasyougoPlanDetail";
import AccountPremiumPlanDetail from "./AccountPremiumPlanDetail";
import { IStudent } from "@/common/lib/api/students/interfaces";
import AccountStudentPlanDetail from "./AccountStudentPlanDetail";
import { useMemo } from "react";

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

  const isFreeStudent = useMemo(() => {
    if (active_student_discount && active_student_discount.student_application_valid) {
      const isFreeDiscount = new Date(active_student_discount.free_discount_end_at).getTime() > new Date().getTime();
      return isFreeDiscount;
    }

    return false;
  }, [active_student_discount]);

  if (isFreeStudent) {
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
      <AccountFreePlanDetail student={active_student_discount} />
      <AccountPlanList />
    </div>
  );
};

export default AccountPlanDetail;
