import React from "react";
import Link from "next/link";
import { FaPlusCircle} from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IUser } from "@/common/lib/api/users/userInterfaces";

interface IProfilePayGoSubscriptionStatus {
  user: IUser;
}

const ProfilePayGoSubscriptionStatus = (
  props: IProfilePayGoSubscriptionStatus
) => {
  const { user } = props;
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-xl">Paket Langganan:</div>
          <div className="text-lg">Pay as You Go</div>
        </div>
        <Link
          href="/plans/"
          className="bg-blue-900 p-2 text-white font-bold flex items-center gap-2 rounded-md"
        >
          <FaPlusCircle />
          <div>Upgrade</div>
        </Link>
      </div>
      <div className="">
        <FaUserPlus className="text-blue-900 text-5xl my-4 mx-auto" />
        <div className="flex items-center gap-2">
          <div>Sisa Kuota:</div>
          <div>Rp {user.balance}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePayGoSubscriptionStatus;
