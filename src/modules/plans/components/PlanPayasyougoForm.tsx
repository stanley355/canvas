import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { JwtPayload, decode } from "jsonwebtoken";
import { toast } from "react-toastify";

import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";

import { fetchTopupPayasyouGo } from "@/common/lib/api/topups/fetchTopupPayasyougo";
import { fetchDokuCheckoutPayment } from "@/common/lib/api/doku/fetchDokuCheckoutPayment";
import { IUser } from "@/common/lib/api/users/interfaces";
import { IDokuCheckoutPaymentRes } from "@/common/lib/api/doku/interfaces";
import { TbProgress } from "react-icons/tb";

const PlanPayasyougoForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount } = e.target as any;

    if (!amount.value) {
      toast.info("Amount can not be empty");
      return;
    }

    if (amount.value < 11000) {
      toast.info("Minimum amount is Rp 11.000");
      return;
    }

    setIsLoading(true);
    const token = Cookies.get("token");
    const user = decode(String(token)) as JwtPayload;

    const topupPayload = {
      userID: user.id,
      topupAmount: Number(amount.value),
    };
    const topup = await fetchTopupPayasyouGo(topupPayload);

    if (topup.id) {
      const doku: IDokuCheckoutPaymentRes = await fetchDokuCheckoutPayment(
        topup,
        user as IUser
      );
      if (doku.response.payment.url) {
        setIsLoading(false);
        window.location.href = doku.response.payment.url;
        return;
      }
      setIsLoading(false);
      toast.error("Fail to create payment, please try again");
      return;
    }

    setIsLoading(false);
    toast.error(
      topup.data.message
        ? topup.data.message
        : "Fail to create payment, please try again"
    );
    return;
  };

  return (
    <div className="mb-8">
      <div className="text-sm text-gray-500">Payment Information</div>

      <form
        className="p-4 border-2 rounded-md shadow-lg"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="amount_input" className="mb-4 text-gray-500">
          Topup Balance Amount
        </Label>
        <Input
          id="amount_input"
          name="amount"
          type="number"
          placeholder="Rp ..."
          className="mb-4"
        />
        <Button
          type="submit"
          className="w-full mb-4 bg-emerald-800 hover:bg-emerald-700"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <TbProgress className="text-lg animate-spin" />
              <span>Loading</span>
            </div>
          ) : (
            <div>Continue</div>
          )}
        </Button>
        <div className="w-full p-2 mb-4 text-sm bg-blue-100">
          You will be charged based on your Topup amount, and your Balance will
          be deducted based on your usage
        </div>

        <div className="text-sm">
          This site is protected by reCAPTCHA and the Google
          <Link
            href={"https://policies.google.com/privacy"}
            target="_blank"
            className="mx-1 text-blue-500 border-b border-b-blue-500"
          >
            Privacy Policy
          </Link>
          and
          <Link
            href={"https://policies.google.com/terms"}
            target="_blank"
            className="mx-1 text-blue-500 border-b border-b-blue-500"
          >
            Terms of Service
          </Link>
          apply.
        </div>
      </form>
    </div>
  );
};

export default PlanPayasyougoForm;
