import { GetServerSideProps } from "next";
import { getAccountPageServerProps } from "@/modules/account/lib/getAccountPageServerProps";

import AccountDetail from "@/modules/account/components/AccountDetail";
import AccountSubscriptionDetail from "@/modules/account/components/AccountSubscriptionDetail";

import {IUser} from '@/common/lib/api/users/interfaces'
import { ISubscription } from "@/common/lib/api/subscriptions/interfaces";
import { ITopup } from "@/common/lib/api/topups/interfaces";

interface IAccountProps {
  account: {
    user: IUser,
    active_subscription: ISubscription,
    topups: ITopup[]
  };
}

const Account = (props: IAccountProps) => {
  const { account } = props;
  console.log(account);
  
  return (
    <div className="container px-6 mx-auto mt-16 lg:mt-4 lg:px-12">
      <div className="lg:grid lg:grid-cols-2">
        <AccountDetail user={account.user} />
        <AccountSubscriptionDetail />
      </div>
    </div>
  );
};

export default Account;
export const getServerSideProps: GetServerSideProps = getAccountPageServerProps;
