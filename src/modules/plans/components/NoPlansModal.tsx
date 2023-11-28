import React from "react";
import Image from "next/image";
import { FaExclamationCircle} from "react-icons/fa";
import Link from "next/link";

const NoPlansModal = () => {
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
          <div className="text-xl text-center font-bold">You have no Ongoing Subscription</div>
          <div className="text-center">
            Subscribe our Platform to continue, start with only{" "}
            <span className="font-bold">Rp1</span>
          </div>
          <Link href="/plans/" className="py-2 bg-blue-900 mt-4 w-full text-white font-bold text-center rounded-lg">
          Subscribe 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPlansModal;
