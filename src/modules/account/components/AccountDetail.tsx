import Image from "next/image";
import Cookies from "js-cookie";

import NextButton from "@/common/components/NextButton";
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

      <div className="mb-8">
        <div className="mb-2 text-lg font-bold">Session</div>
        <NextButton onClick={handleLogout} variant="outline" className="px-2 py-1">
          Logout
        </NextButton>
      </div>
    </div>
  );
};

export default AccountDetail;
