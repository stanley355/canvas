import { copyToClipboard } from "@/common/lib/copyToClipboard";
import React from "react";
import Countdown from "react-countdown";

interface IVAInfo {
  info: any;
}

const VAinfo = ({ info }: IVAInfo) => {
  return (
    <div className="mt-4 text-lg">
      <div>
        Pembayaran via:{" "}
        <span className="italic font-semibold">{info.bank_name} VA</span>
      </div>
      <div className="mt-2">
        Total:{" "}
        <span className="text-green-700 font-semibold italic">
          Rp{info.amount}
        </span>{" "}
      </div>
      <div className="text-center text-xl  mt-8 font-semibold">
        <div>Nomor Virtual Account: </div>
        <button
          type="button"
          onClick={() => copyToClipboard(info.virtual_account_number)}
          className="lg:ml-2 italic underline text-blue-600"
        >
          {info.virtual_account_number}
        </button>
      </div>
      <div className="my-2 mb-4 text-center font-semibold">
        a.n Language - Stanley Winata
      </div>
      <div className="border border-blue-900 p-2 rounded flex flex-row mb-8 justify-center">
        <div className="mr-2">Bayar sebelum:</div>
        <span className="font-semibold">
          <Countdown
            date={new Date(info?.expired_date_utc ?? info.expired_date)}
          />
        </span>
      </div>
      <div className="font-semibold">Catatan:</div>
      <div className="mb-4">
        1. Sebelum pembayaran, jangan refresh atau menutup halaman ini
      </div>
      <div className="mb-4">
        2. Transfer jumlah yang sesuai dengan jumlah total diatas (cth: transfer
        Rp11.000 jika total yang tertera Rp11.000)
      </div>
      <div>
        3. Setelah pembayaran: <b>Klik tombol akun di atas</b> untuk mengecek
        paket Anda,
      </div>
    </div>
  );
};

export default VAinfo;
