import React from "react";
import Link from "next/link";
import { FaPlusCircle, FaExclamationCircle } from "react-icons/fa";
import { IProfile } from "@/pages/profile";
import { ISubscription } from "@/common/lib/api/subscriptions/subscriptionInterface";
import { FaUserPlus } from "react-icons/fa6";
import { formatSubscriptionDate } from "../lib/formatSubscriptionDate";

interface IProfileTimelySubscriptionStatus {
  subscription: ISubscription;
}

const ProfileTimelySubscriptionStatus = (
  props: IProfileTimelySubscriptionStatus
) => {
  const { subscription } = props;
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-xl">Paket Langganan:</div>
          <div className="text-lg">
            {subscription?.duration_type} Subscription
          </div>
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
          <div>Tanggal Mulai:</div>
          <div>{formatSubscriptionDate(subscription?.start_at)}</div>
        </div>
        <div className="flex items-center gap-2">
          <div>Tanggal Berakhir:</div>
          <div>{formatSubscriptionDate(subscription?.end_at)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTimelySubscriptionStatus;
