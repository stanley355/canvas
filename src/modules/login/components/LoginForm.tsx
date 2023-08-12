import React from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleLoginBtn from "./GoogleLoginBtn";
import EmailPassForm from "./EmailPassForm";

const LoginForm = () => {
  return (
    <div className="shadow-lg shadow-white p-4 pb-8 w-full lg:w-[400px] m-auto bg-transparent rounded-md">
      <div className="flex items-center justify-between mb-8">
        <span className="text-3xl font-bold">Login</span>
        <Link href="/register/" className="underline hover:text-blue-300">
          register
        </Link>
      </div>
      <div className="w-fit m-auto">
        <GoogleLoginBtn />
      </div>
      <div className="my-4 text-center">or</div>
      <EmailPassForm />
    </div>
  );
};

export default LoginForm;
