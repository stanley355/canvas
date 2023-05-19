import React from "react";
import { SiTaichilang } from "react-icons/si";
import GoogleLoginBtn from "./GoogleLoginBtn";

const LoginModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-90">
      <div className="border border-white bg-black rounded-md py-8 flex flex-col items-center justify-center lg:w-1/3 mt-24 mx-auto">
        <h1 className="flex flex-row items-center justify-center text-2xl font-bold mb-4">
          <SiTaichilang />
          <span className="ml-2">LanguageAI</span>
        </h1>
        <div className="text-center text-lg font-semibold">
          Please Login To Continue & Save Your Work
        </div>
        <h3 className="text-center text-2xl mb-4 font-bold">
          Don&apos;t worry, it&apos;s always free!
        </h3>
        <h4 className="text-center text-lg mb-2">
          Sign Up & Login with One Click
        </h4>
        <GoogleLoginBtn />
      </div>
    </div>
  );
};

export default LoginModal;
