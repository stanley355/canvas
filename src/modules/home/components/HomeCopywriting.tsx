import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLanguage, FaRobot } from 'react-icons/fa';

const HomeCopywriting = () => (
  <div className="bg-white h-screen">
    <div className="container mx-auto p-4 text-black lg:grid lg:grid-cols-2 lg:gap-4">
      <div className="mb-4">
        <div className=" font-semibold text-4xl lg:text-6xl mb-4">
          Effortless translations and flawless grammar
        </div>
        <div className="lg:text-2xl">
          Welcome to the future of language assistance! We develop cutting-edge translation tools and grammar checks, making communication simple, efficient, and enjoyable.
        </div>
        <div className="hidden lg:flex items-center justify-evenly mt-4">
          <Link href="/translate/" className="w-fit p-2 border-white shadow shadow-gray-500 rounded-md mt-2 bg-gradient-to-r from-blue-500 flex items-center gap-2 text-xl">
            <FaLanguage className="text-2xl" />
            <span>Translate</span>
          </Link>
          <Link href="/checkbot/" className="w-fit p-2 border-white shadow shadow-gray-500 rounded-md mt-2 bg-gradient-to-r from-indigo-500 flex items-center gap-2 text-xl">
            <FaRobot className="text-2xl" />
            <span>Checkbot</span>
          </Link>
        </div>
      </div>
      <Image src="/images/home/home_translate.jpeg" alt="Translation and Grammar Check" width={400} height={400} className="w-full h-auto rounded-md" />
    </div>
  </div>
);

export default HomeCopywriting;