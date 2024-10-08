import { IStudent } from "@/common/lib/api/students/interfaces";
import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import AccountSubscriptionsTable from "./AccountSubscriptionsTable";

interface IAccountStudentPlanDetail {
  student: IStudent;
  subscriptions: ISubscription[];
}

const AccountStudentPlanDetail = (props: IAccountStudentPlanDetail) => {
  const { student, subscriptions } = props;

  return (
    <div className="pb-4">
      <div className="mb-4 text-2xl font-bold border-b">Subscription</div>

      <div className="mb-4 text-xl font-bold">Plan Details</div>
      <div className="mb-4">
        <div className="mb-2 text-gray-500">Your Plan</div>
        <div className="mb-2">Student Plan (One Year Free)</div>

        <div className="mb-2 text-gray-500">Student Plan Start date</div>
        <div className="mb-2">
          {new Date(student.created_at).toLocaleDateString("id-ID")}
        </div>
        <div className="mb-2 text-gray-500">One Year Free end date</div>
        <div>
          {new Date(student.free_discount_end_at).toLocaleDateString("id-ID")}
        </div>
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

export default AccountStudentPlanDetail;
