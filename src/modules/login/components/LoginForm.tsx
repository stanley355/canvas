import React, { useState } from "react";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";
import { SiTaichilang } from "react-icons/si";
import GoogleLoginBtn from "./GoogleLoginBtn";
import Button from "@/common/components/Button";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmit(true);
    const target = e.target as any;
    const email = target.email.value;
    const password = target.password.value;
    
    if (!email || !password) {
      setHasSubmit(false);
      toast.error("Email and Password are required!");
      return;
    }

  }

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full lg:w-1/3 lg:mx-auto">
      <h1 className="flex flex-row items-center justify-center text-2xl mb-2">
        <SiTaichilang />
        <span className="ml-2">LanguageAI Login</span>
      </h1>
      <h2 className="text-2xl mb-4 font-semibold">
        Don&apos;t worry, it&apos;s always free!
      </h2>
      <h3 className="mb-2">Login with One Click</h3>
      <GoogleLoginBtn />
      <div className="my-4">or</div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col mb-4">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email_input"
            name="email"
            className="p-2 text-black rounded-sm"
            placeholder="myemail@email.com"
          />
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password_input"
            name="password"
            className="p-2 text-black rounded-sm"
            placeholder="******"
          />
        </div>
        <Button
          disabled={hasSubmit}
          type="submit"
          wrapperClassName="border border-white p-2 rounded-sm flex items-center justify-center bg-white text-black hover:bg-black hover:text-white"
          buttonClassName="w-full"
        >
          {hasSubmit ? <FaSpinner className="animate-spin mx-auto" /> : "Login"}
        </Button>
      </form>
      <div className="mt-8">Don't have an account? <Link href="/register/" className="underline hover:text-blue-300">Register here</Link> </div>
    </div>
  );
};

export default LoginForm;
