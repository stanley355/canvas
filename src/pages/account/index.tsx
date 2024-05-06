import { GetServerSideProps } from "next";
import { getAccountPageServerProps } from "@/modules/account/lib/getAccountPageServerProps";

import AccountDetail from "@/modules/account/components/AccountDetail";
import AccountPlanDetail from "@/modules/account/components/AccountPlanDetail";

import { IUser } from "@/common/lib/api/users/interfaces";
import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import { ITopup } from "@/common/lib/api/topups/interfaces";
import { IStudent } from "@/common/lib/api/students/interfaces";
import AccountPageError from "@/modules/account/components/AccountPageError";

interface IAccountProps {
  account: {
    user: IUser;
    active_student_discount: IStudent;
    active_subscription: ISubscription;
    topups: ITopup[];
  };
}

const Account = (props: IAccountProps) => {
  const { account } = props;

  if (!account.user) {
    return <AccountPageError />;
  }

  return (
    <div className="container px-6 mx-auto mt-16 lg:mt-4 lg:px-12">
      <div className="lg:grid lg:grid-cols-2">
        <AccountDetail user={account.user} />
        <AccountPlanDetail account={account} />
      </div>
    </div>
  );
};

export default Account;
export const getServerSideProps: GetServerSideProps = getAccountPageServerProps;
