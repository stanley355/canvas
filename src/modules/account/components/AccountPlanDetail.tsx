import { useMemo } from "react";

import AccountFreePlanDetail from "./AccountFreePlanDetail";
import AccountPremiumPlanDetail from "./AccountPremiumPlanDetail";
import AccountStudentPlanDetail from "./AccountStudentPlanDetail";
import AccountFreePlanTable from "./AccountFreePlanTable";

import { IStudent } from "@/common/lib/api/students/interfaces";
import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";

interface IAccountPlanDetail {
  account: {
    student: IStudent | null;
    subscription: ISubscription | null;
    subscriptions: ISubscription[];
  };
}

const AccountPlanDetail = (props: IAccountPlanDetail) => {
  const { account } = props;
  const { student, subscription, subscriptions } = account;

  const isFreeStudent = useMemo(() => {
    if (student) {
      const isFreeDiscount =
        new Date(student.free_discount_end_at).getTime() > new Date().getTime();
      return isFreeDiscount;
    }

    return false;
  }, [student]);

  if (isFreeStudent && student) {
    return (
      <AccountStudentPlanDetail
        student={student}
        subscriptions={subscriptions}
      />
    );
  }

  if (subscription?.id) {
    return (
      <AccountPremiumPlanDetail
        subscription={subscription}
        subscriptions={subscriptions}
      />
    );
  }

  return (
    <div>
      <AccountFreePlanDetail />
      <AccountFreePlanTable />
    </div>
  );
};

export default AccountPlanDetail;
