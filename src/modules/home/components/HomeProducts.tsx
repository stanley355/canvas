import React from "react";
import Link from "next/link";
import { FaLanguage, FaRobot } from "react-icons/fa6";

const HomeProducts = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-evenly mb-12">
      <div className="bg-white rounded-lg p-4 mb-8 lg:mb-0 lg:w-[400px] border border-blue-900">
        <div className="flex items-center justify-center gap-2 text-2xl lg:text-3xl font-bold">
          <FaLanguage className="text-4xl  text-blue-900" />
          <div>AI Translate</div>
        </div>
        <div className="text-center mb-4 lg:text-lg">
          Terjemahkan teks secara akurat ke lebih dari 100 bahasa
        </div>
        <Link
          href="/translate"
          className="w-full block bg-blue-900 text-white rounded-md p-2 text-center font-bold lg:text-lg"
        >
          Translate
        </Link>
      </div>
      <div className="bg-white rounded-lg p-4 lg:w-[400px] border border-blue-900">
        <div className="flex items-center justify-center gap-2 text-2xl lg:text-3xl font-bold">
          <FaRobot className="text-4xl text-blue-900" />
          <div>AI Checkbot</div>
        </div>
        <div className="text-center mb-4 lg:text-lg">
          Cek grammar, spelling, dan punctuation dari semua teks dan bahasa
        </div>
        <Link
          href="/checkbot"
          className="w-full block bg-blue-900 text-white rounded-md p-2 text-center font-bold lg:text-lg"
        >
          Check
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
