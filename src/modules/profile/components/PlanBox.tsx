import React from "react";
import { FaSearch, FaSkating, FaToggleOn } from "react-icons/fa";
import Button from "@/common/components/Button";
import { isSubscriptionExpired } from "../lib/isSubscriptionExpired";
import { formatSubscriptionMonth } from "@/modules/plans/lib/formatSubscriptionMonth";
import { formatSubscriptionEndDate } from "@/modules/plans/lib/formatSubscriptionDate";

interface IPlanBox {
  user: any;
  subscription: any;
}

const PlanBox = (props: IPlanBox) => {
  const { user, subscription } = props;
  const subscriptionExpired = subscription?.id
    ? isSubscriptionExpired(subscription.end_at)
    : null;

  return (
    <div className="border border-gray-500 rounded p-2 my-4 lg:my-0 lg:w-2/3 ">
      <div className="flex items-center justify-between">
        <div className="font-semibold lg:text-lg">
          <div>My Plan:</div>
          {!subscription.id && !user.balance && <div>*Freemium Plan</div>}
        </div>
        <Button
          type="link"
          href="/plans/"
          wrapperClassName="bg-blue-900 p-2 text-white rounded"
          buttonClassName="w-full h-full flex items-center gap-2"
        >
          <FaSkating />
          <span>Upgrade</span>
        </Button>
      </div>

      {!subscription?.id && !user.balance && (
        <div className="flex flex-col items-center my-8 lg:text-xl w-fit shadow-lg p-4 mx-auto rounded">
          <FaSearch className="text-3xl text-blue-900 mb-4" />
          <div className="text-xl  lg:text-2xl font-semibold">
            Premium Plan Not Found{" "}
          </div>
          <div>Did you upgrade yet?</div>
          <Button
            type="link"
            href="/plans/"
            wrapperClassName="bg-blue-900 p-2 text-white rounded mt-4"
            buttonClassName="w-full h-full flex items-center gap-2"
          >
            <FaSkating />
            <span>Upgrade</span>
          </Button>
        </div>
      )}

      {subscription?.id && !subscriptionExpired && (
        <div className="flex flex-col items-center my-8 lg:text-xl w-fit shadow-lg p-4 mx-auto rounded">
          <FaToggleOn className="text-5xl text-blue-900" />
          <div className="text-xl  lg:text-2xl font-semibold">
            {formatSubscriptionMonth(subscription.duration_type)} Subscription{" "}
          </div>
          <div>Use Premium all the way until</div>
          <div className="font-semibold text-lg lg:text-xl mt-2">
            {" "}
            {formatSubscriptionEndDate(subscription.end_at)}
          </div>
          <div className="italic">End Date</div>
        </div>
      )}

      {(!subscription.id || subscriptionExpired) && user.balance > 0 && (
        <div className="flex flex-col items-center my-8 lg:text-xl w-fit shadow-lg p-4 mx-auto rounded">
          <FaSkating className="text-3xl text-blue-900" />
          <div className="text-xl  lg:text-3xl font-semibold">
            Pay As You Go
          </div>
          <div>Only Pay for what you need</div>
          <div className="italic text-green-700 font-semibold text-lg lg:text-2xl mt-2">
            Rp {user.balance}
          </div>
          <div className="italic">balance left</div>
        </div>
      )}
    </div>
  );
};

export default PlanBox;
