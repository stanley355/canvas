import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";

import { createTopupPaylater } from "../lib/createTopupPaylater";
import { SubscriptionDurationType } from "../lib/interfaces";

const PaylaterOfferModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onPaylaterClick = async () => {
    setIsLoading(true);
    const token = Cookies.get("token");
    const user: any = token ? decode(token) : {};
    const paylaterRes = user?.id
      ? await createTopupPaylater(
          user.id,
          25000,
          SubscriptionDurationType.Monthly
        )
      : {};

    if (paylaterRes?.id) {
      setIsLoading(false);
      toast.success("Sukses berlangganan 1 bulan");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return;
    }

    setIsLoading(false);
    toast.error("Gagal berlangganan, silakan coba lagi");
    return;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50 px-2 lg:px-0">
      <div className="p-4 bg-white rounded-lg border border-blue-900 mt-[35%] lg:mt-[15%] lg:w-1/4 lg:mx-auto">
        <h1 className="flex items-center justify-center text-2xl gap-1">
          <span>Language</span>
          <Image
            src="/images/languageai.png"
            alt="Language AI"
            width={30}
            height={30}
          />
        </h1>

        <div className="flex flex-col items-center justify-center mt-4">
          <FaExclamationCircle className="text-blue-900 text-5xl my-4" />
          <div className="text-xl text-center font-bold">
            Anda tidak ada paket berlangganan
          </div>
          <div className="text-center text-lg mb-8">
            Yuk coba 1 bulan dengan Paylater cuma Rp25.000,{" "}
            <b>bonus gratis 1 bulan</b>
          </div>
          <button
            type="button"
            onClick={onPaylaterClick}
            className="py-2 bg-blue-900 w-full text-white font-bold text-center rounded-lg text-lg mb-4"
          >
            {isLoading ? (
              <FaSpinner className="mx-auto animate-spin" />
            ) : (
              "Coba Paylater Gratis 1 bulan"
            )}
          </button>
          <Link
            href="/plans/"
            className="py-2 text-blue-900 w-full border-blue-900 border font-bold text-center rounded-lg"
          >
            Lihat paket langganan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaylaterOfferModal;
