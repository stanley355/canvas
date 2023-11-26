import React from "react";
import Link from "next/link";
import GoogleLoginBtn from "./GoogleLoginBtn";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";

const LoginModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50 px-2">
      <div className="p-4 bg-white rounded-lg border border-blue-900 mt-[35%] lg:mt-[15%] lg:w-1/4 lg:mx-auto">
        <LoginHeader />
        <LoginForm />
        <div className="my-4 flex flex-col items-center">
          <div className="text-lg mb-2">or</div>
          <GoogleLoginBtn />
        </div>

        <div className="text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register/" className="text-blue-900 underline">
            Register
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
