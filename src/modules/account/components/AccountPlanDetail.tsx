import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import { IUser } from "@/common/lib/api/users/interfaces";
import AccountFreePlanDetail from "./AccountFreePlanDetail";
import AccountPremiumPlanDetail from "./AccountPremiumPlanDetail";
import { IStudent } from "@/common/lib/api/students/interfaces";
import AccountStudentPlanDetail from "./AccountStudentPlanDetail";
import { useMemo } from "react";
import AccountFreePlanTable from "./AccountFreePlanTable";

interface IAccountPlanDetail {
  account: {
    user: IUser;
    student: IStudent | null;
    subscription: ISubscription | null;
    subscriptions: ISubscription[];
  };
}

const AccountPlanDetail = (props: IAccountPlanDetail) => {
  const { account } = props;
  const { user, student, subscription, subscriptions } =
    account;

  const isFreeStudent = useMemo(() => {
    if (
      student
    ) {
      const isFreeDiscount =
        new Date(student.free_discount_end_at).getTime() >
        new Date().getTime();
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

  // if (subscription?.id) {
  //   return (
  //     <AccountPremiumPlanDetail
  //       subscription={subscription}
  //       topups={topups}
  //     />
  //   );
  // }

  return (
    <div>
      <AccountFreePlanDetail />
      <AccountFreePlanTable />
    </div>
  );
};

export default AccountPlanDetail;
