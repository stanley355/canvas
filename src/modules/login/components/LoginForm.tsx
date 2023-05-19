import React from "react";
import { SiTaichilang } from "react-icons/si";
import GoogleLoginBtn from "./GoogleLoginBtn";

const LoginForm = () => {
  return (
    <div className="rounded-md py-8 lg:w-1/3 mt-24 mx-auto flex flex-col items-center justify-center border border-white">
      <h1 className="flex flex-row items-center justify-center text-2xl mb-2">
        <SiTaichilang />
        <span className="ml-2">LanguageAI Login</span>
      </h1>
      <h2 className="text-2xl mb-4 font-semibold">
        Don&apos;t worry, it&apos;s always free!
      </h2>
      <h3 className="text-lg font-semibold mb-2">
        Sign Up / Login in One Click
      </h3>
      <GoogleLoginBtn />
    </div>
  );
};

export default LoginForm;
