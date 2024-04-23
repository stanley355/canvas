import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { FaRupiahSign } from "react-icons/fa6";

import { Button } from "@/common/components/ui/button";
import { IUser } from "@/common/lib/api/users/interfaces";

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
        <div className="mb-2 text-lg font-bold">Linked Account</div>
        <div className="flex items-center gap-2">
          <Image
            width={16}
            height={16}
            src={"/images/icon/google.svg"}
            alt="Google"
          />
          <span className="text-gray-500">Google</span>
        </div>
      </div>

      <div className="mb-6 lg:hidden">
        <div className="text-lg font-bold ">Subscriptions</div>
        <Link
          className="flex items-center gap-2 py-2 border-b w-fit hover:border-b-black"
          href="/account/subscription"
        >
          <FaRupiahSign />
          <span>Check Subscription</span>
        </Link>
      </div>

      <div className="mb-8">
        <div className="mb-2 text-lg font-bold">Session</div>
        <Button
          onClick={handleLogout}
          variant={"secondary"}
          size={"sm"}
          className="hover:bg-black hover:text-white"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AccountDetail;
