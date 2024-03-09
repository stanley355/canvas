import { GetServerSideProps } from "next";
import { getAccountPageServerProps } from "@/modules/account/lib/getAccountPageServerProps";
import AccountDetail from "@/modules/account/components/AccountDetail";
import { IUser } from "@/common/lib/api/users/userInterfaces";
import AccountSubscriptionDetail from "@/modules/account/components/AccountSubscriptionDetail";

interface IAccountProps {
  user: IUser;
}

const Account = (props: IAccountProps) => {
  const { user } = props;
  return (
    <div className="container px-6 mx-auto mt-16 lg:mt-4 lg:px-12">
      <div className="lg:grid lg:grid-cols-2">
        <AccountDetail user={user} />
        <AccountSubscriptionDetail />
      </div>
    </div>
  );
};

export default Account;
export const getServerSideProps: GetServerSideProps = getAccountPageServerProps;
