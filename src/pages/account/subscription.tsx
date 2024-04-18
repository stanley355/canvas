import { GetServerSideProps } from "next";
import AccountPlanDetail from "@/modules/account/components/AccountPlanDetail";
import { getAccountPageServerProps } from "@/modules/account/lib/getAccountPageServerProps";
import { IUser } from "@/common/lib/api/users/interfaces";
import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import { ITopup } from "@/common/lib/api/topups/interfaces";
import { IStudent } from "@/common/lib/api/students/interfaces";

interface IAccountSubscription {
  account: {
    user: IUser;
    active_student_discount: IStudent;
    active_subscription: ISubscription;
    topups: ITopup[];
  };
}

const AccountSubscription = (props: IAccountSubscription) => {
  const { account } = props;
  return (
    <div className="container mx-auto mt-16 lg:mt-4 lg:px-12">
      <AccountPlanDetail account={account}  />
    </div>
  );
};

export default AccountSubscription;

export const getServerSideProps: GetServerSideProps = getAccountPageServerProps;
