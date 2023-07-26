import React from "react";
import Link from "next/link";
import { SiTaichilang } from "react-icons/si";
import GoogleLoginBtn from "./GoogleLoginBtn";
import EmailPassForm from "./EmailPassForm";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full lg:w-1/4 m-auto bg-black rounded-md">
      <h1 className="flex flex-row items-center justify-center text-2xl mb-2">
        <SiTaichilang />
        <span className="ml-2">Login</span>
      </h1>
      <h2 className="text-2xl mb-4 font-semibold">
        Don&apos;t worry, it&apos;s always free!
      </h2>
      <h3 className="mb-2">Login with One Click</h3>
      <GoogleLoginBtn />
      <div className="my-4">or</div>
      <EmailPassForm />
      <div className="mt-8">
        Don&apos;t have an account?{" "}
        <Link href="/register/" className="underline hover:text-blue-300">
          Register here
        </Link>{" "}
      </div>
    </div>
  );
};

export default LoginForm;
