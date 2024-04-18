import { useState } from "react";
import { toast } from "react-toastify";
import { TbChevronCompactRight, TbProgress } from "react-icons/tb";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";

import { Button } from "@/common/components/ui/button";
import { fetchDokuCheckoutPayment } from "@/common/lib/api/doku/fetchDokuCheckoutPayment";
import {
  TopupPremiumDuration,
  fetchTopupPremium,
} from "@/common/lib/api/topups/fetchTopupPremium";
import { IDokuCheckoutPaymentRes } from "@/common/lib/api/doku/interfaces";
import { IUser } from "@/common/lib/api/users/interfaces";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

const PlanPremiumForm = () => {
  const [loadingBtn, setLoadingBtn] = useState<null | TopupPremiumDuration>(
    null
  );

  const handleClick = async (duration: TopupPremiumDuration) => {
    setLoadingBtn(duration);
    const token = Cookies.get("token");
    const user = decode(String(token)) as JwtPayload;

    sendFirebaseEvent('topup_premium_student');
    const topupPayload = {
      userID: user.id,
      duration,
    };
    const topup = await fetchTopupPremium(topupPayload);

    if (topup.id) {
      const doku: IDokuCheckoutPaymentRes = await fetchDokuCheckoutPayment(
        topup,
        user as IUser
      );
      if (doku.response.payment.url) {
        setLoadingBtn(null);
        window.location.href = doku.response.payment.url;
        return;
      }
      setLoadingBtn(null);
      toast.error("Fail to create payment, please try again");
      return;
    }

    setLoadingBtn(null);
    toast.error(
      topup.data.message
        ? topup.data.message
        : "Fail to create payment, please try again"
    );
    return;
  };
  return (
    <div className="mb-8">
      <div className="mb-2 text-sm text-gray-500">Premium Options</div>

      <div className="shadow-lg">
        <Button
          variant={"ghost"}
          disabled={loadingBtn !== null}
          onClick={() => handleClick(TopupPremiumDuration.HalfYearly)}
          className="flex-col items-start w-full p-4 border-2 rounded-b-none border-emerald-700 h-fit rounded-t-md"
        >
          <div className="p-1 mb-2 text-sm text-white rounded-md bg-emerald-700">
            Most Popular
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-semibold">Half yearly</div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">Rp 150.000</span>
              {loadingBtn === TopupPremiumDuration.HalfYearly ? (
                <TbProgress className="text-emerald-700 animate-spin" />
              ) : (
                <TbChevronCompactRight className="text-white rounded-full bg-emerald-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <div>6 Months</div>
            <div></div>
          </div>
        </Button>
        <Button
          variant={"ghost"}
          disabled={loadingBtn !== null}
          onClick={() => handleClick(TopupPremiumDuration.Quarterly)}
          className="flex-col w-full p-4 rounded-none border-y-2 h-fit"
        >
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-semibold">Quarterly</div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">Rp 70.000</span>
              {loadingBtn === TopupPremiumDuration.Quarterly ? (
                <TbProgress className="text-emerald-700 animate-spin" />
              ) : (
                <TbChevronCompactRight className="text-white rounded-full bg-emerald-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-between w-full text-gray-500">
            <div>3 Months</div>
            <div className="p-1 bg-emerald-100 text-emerald-700">Save 7%</div>
          </div>
        </Button>
        <Button
          variant={"ghost"}
          disabled={loadingBtn !== null}
          onClick={() => handleClick(TopupPremiumDuration.Monthly)}
          className="flex-col w-full p-4 border rounded-t-none h-fit"
        >
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-semibold">Monthly</div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">Rp 25.000</span>
              {loadingBtn === TopupPremiumDuration.Monthly ? (
                <TbProgress className="text-emerald-700 animate-spin" />
              ) : (
                <TbChevronCompactRight className="text-white rounded-full bg-emerald-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-between w-full text-gray-500">
            <div>1 Month</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default PlanPremiumForm;
