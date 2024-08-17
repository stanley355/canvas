import Link from "next/link";
import Cookies from "js-cookie";

import NextButton from "@/common/components/NextButton";
import { IUser } from "@/common/lib/api/users/interfaces";
import Button from "@/common/components/Button";

interface IAccountDetail {
  user: IUser;
}

const AccountDetail = (props: IAccountDetail) => {
  const { user } = props;

  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/";
  };

  return (
    <div>
      <div className="mb-8 text-2xl font-bold border-b lg:w-4/5">Account</div>

      <div className="pb-2 mb-2 border-b lg:border-transparent">
        <div className="mb-2 text-gray-500">Name</div>
        <div>{user.fullname}</div>
      </div>

      <div className="pb-2 mb-8 border-b lg:border-transparent">
        <div className="mb-2 text-gray-500">Email</div>
        <div>{user.email}</div>
      </div>

      <div className="mb-8">
        <div className="mb-2 text-lg font-bold">Change Password</div>

        <Link href="/account/change-password" className="underline hover:text-brand-primary">
          Click to change password
        </Link>
      </div>

      <div className="mb-8">
        <div className="mb-2 text-lg font-bold">Session</div>
        <Button variant="outline">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AccountDetail;
