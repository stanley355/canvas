import React from "react";
import { SiTaichilang } from "react-icons/si";
import GoogleLoginBtn from "./GoogleLoginBtn";

const LoginForm = () => {
  return (
    <div className="border border-white bg-gray-600 rounded-md p-4 lg:w-1/3 mt-20 mx-auto">
      <h1 className="flex flex-row items-center justify-center text-2xl font-bold">
        <SiTaichilang />
        <span className="ml-2">LanguageAI Login</span>
      </h1>
      <h2 className="text-center text-lg mb-4">
        Don&apos;t worry, it&apos;s still free
      </h2>
      <h3 className="text-center text-lg font-semibold mb-2">
        Sign Up / Login with One Click
      </h3>
      <GoogleLoginBtn />

      <div className="text-center mt-2">
        *Email & Password Login Coming Soon
      </div>
    </div>
  );
};

export default LoginForm;
