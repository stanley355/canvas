import { useState } from "react"
import { toast } from "react-toastify"
import { TbProgress, TbChevronRight } from "react-icons/tb"
import Cookies from "js-cookie"
import { JwtPayload, decode } from "jsonwebtoken"

import NextButton from "@/common/components/NextButton"

import { STUDENT_PLAN_LIST } from "../../lib/constant"
import { PremiumTopupDuration } from "@/common/lib/api/topups/interfaces"
import { fetchTopupPremium } from "@/common/lib/api/topups/fetchTopupPremium"
import { fetchDokuCheckoutPayment } from "@/common/lib/api/doku/fetchDokuCheckoutPayment"
import { cn } from "@/common/lib/cn"
import { IUser } from "@/common/lib/api/users/interfaces"
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent"

const PlanStudentsForm = () => {
  const [selectedDuration, setSelectedDuration] = useState<PremiumTopupDuration | null>(null);

  const handleClick = async (duration: PremiumTopupDuration) => {
    sendFirebaseEvent('click_premium_student');
    setSelectedDuration(duration);

    const token = Cookies.get('token');
    const user = decode(String(token)) as JwtPayload;;
    const topup = await fetchTopupPremium(user.id, duration);

    if (topup.id) {
      const doku = await fetchDokuCheckoutPayment(topup, user as IUser);
      if (doku?.response?.payment.url) {
        window.location.href = doku.response.payment.url;
        return;
      }
    }

    toast.error("Fail to create payment link, please try again");
    setSelectedDuration(null);
    return;
  }

  return (
    <div className="px-4">
      {STUDENT_PLAN_LIST.map((plan, index) =>
        <NextButton
          key={plan.title}
          onClick={() => handleClick(plan.duration)}
          variant="outline"
          className={cn("flex-col items-start w-full p-4 rounded-none", index === 0 && "rounded-t-lg", index === 2 && "rounded-b-lg")}
        >
          {index === 0 && <div className="p-2 mb-2 text-sm rounded-md bg-yellow-300">
            Most Popular
          </div>}
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-semibold">{plan.title}</div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-semibold">{plan.price}</span>
              {selectedDuration === plan.duration ? (
                <TbProgress className="text-brand-primary animate-spin" />
              ) : (
                <TbChevronRight className="rounded-full bg-brand-primary text-white" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div>{plan.durationText}</div>
            <div className="p-1 bg-brand-primary text-white">{plan.discountText}</div>
          </div>
        </NextButton>
      )}
    </div>
  )
}

export default PlanStudentsForm