import React from "react";
import { SiTaichilang } from "react-icons/si";
import GoogleLoginBtn from "./GoogleLoginBtn";

const LoginModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-90 px-4">
      <div className="border border-white bg-gray-600 rounded-md p-4 lg:w-1/3 mt-20 mx-auto">
        <h1 className="flex flex-row items-center justify-center text-2xl font-bold mb-4">
          <SiTaichilang />
          <span className="ml-2">LanguageAI</span>
        </h1>
        <div className="text-center text-lg">
          Please Login To Continue and Save Your Work
        </div>
        <h3 className="text-center text-2xl mb-4 font-bold">
          Don&apos;t worry, it&apos;s always free!
        </h3>
        <h4 className="text-center text-lg mb-2">
          Sign Up / Login with One Click
        </h4>
        <GoogleLoginBtn />

        <div className="text-center mt-2">
          *Email & Password Login Coming Soon
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
