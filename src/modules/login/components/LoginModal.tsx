import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoogleLoginBtn from "./GoogleLoginBtn";
import EmailPassForm from "./EmailPassForm";

const LoginModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-80">
      <div className="border border-white bg-gradient-to-b from-black to-blue-900 rounded-lg px-4 py-8 mt-24 mx-auto lg:w-[400px]">
        <h1 className="flex flex-row items-center justify-center text-2xl font-bold mb-4">
          <span>Language</span>
          <Image
            src="/images/languageai_white.png"
            alt="Language AI"
            width={30}
            height={30}
          />
        </h1>
        <div className="text-center text-lg font-semibold mb-4">
          Please Login to Continue
        </div>
        <div className="w-fit mx-auto">
          <GoogleLoginBtn />
        </div>
        <div className="my-4 text-center">or</div>
        <EmailPassForm />
        <div className="mt-8 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register/" className="underline text-blue-300">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
