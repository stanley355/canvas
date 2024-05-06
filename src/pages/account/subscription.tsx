import { GetServerSideProps } from "next";
import { TbReload } from "react-icons/tb";

import { getAccountPageServerProps } from "@/modules/account/lib/getAccountPageServerProps";
import AccountPlanDetail from "@/modules/account/components/AccountPlanDetail";
import CanvasButton from "@/common/components/ui/CanvasButton";

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

  if (!account.user) {
    return <div className="container px-6 mx-auto mt-16 lg:mt-4 lg:px-12">
      <div className="mt-40 text-xl text-center text-gray-500">Application error, please refresh and try again</div>
      <CanvasButton className="gap-2 px-4 mx-auto mt-8 text-lg" onClick={() => window.location.reload()}>
        <TbReload />
        Refresh
      </CanvasButton>
    </div>
  }
  
  return (
    <div className="container mx-auto mt-16 lg:mt-4 lg:px-12">
      <AccountPlanDetail account={account} />
    </div>
  );
};

export default AccountSubscription;

export const getServerSideProps: GetServerSideProps = getAccountPageServerProps;
