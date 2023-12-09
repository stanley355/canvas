import React from "react";
import Link from "next/link";
import { FaPlusCircle, FaExclamationCircle } from "react-icons/fa";

const ProfileNoSubscriptionStatus = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-xl">Paket Langganan:</div>
          <div className="text-lg">Tidak ada Paket Langganan</div>
        </div>
        <Link
          href="/plans/"
          className="bg-blue-900 p-2 text-white font-bold flex items-center gap-2 rounded-md"
        >
          <FaPlusCircle />
          <div>Berlangganan</div>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <FaExclamationCircle className="text-blue-900 text-5xl my-4" />
        <div className="text-xl text-center font-bold">
          Anda tidak ada paket langganan
        </div>
        <div className="text-center">
          Yuk berlangganan, harga mulai dari
          <span className="font-bold"> Rp1</span> aja loh
        </div>
        <Link
          href="/plans/"
          className="py-2 bg-blue-900 mt-4 w-full text-white font-bold text-center rounded-lg"
        >
          Lihat Paket Langganan
        </Link>
      </div>
    </div>
  );
};

export default ProfileNoSubscriptionStatus;
