import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { SiTaichilang } from "react-icons/si";
import Button from "@/common/components/Button";

const ForgotPasswordForm = () => {
  return (
    <div className="border border-white bg-gray-600 rounded-md p-4 lg:w-1/3">
      <h1 className="flex flex-row items-center justify-center text-2xl font-bold">
        <SiTaichilang />
        <span className="ml-2">LanguageAI</span>
      </h1>
      <h2 className="text-center text-lg mb-4">Forgot Password?</h2>
      <form
        className="mt-4"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="email_input" className="flex flex-row items-center">
            <FaEnvelope />
            <span className="text-lg ml-2">We&apos;ll send a verification to your email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email_input"
            aria-label="email_input"
            placeholder="zzz@mail.com"
            className="p-2 rounded-md text-black"
          />
        </div>

        <Button
          type="button"
          title="Send Verification Email"
          wrapperClassName="text-center p-2 bg-transparent border rounded-md font-semibold mb-4 cursor-pointer hover:bg-white hover:text-gray-600"
        />
      </form>
      <div className="mt-4 flex flex-row justify-between">
        <Button
          type="button"
          title="Login"
          wrapperClassName="p-1 border border-white rounded-md"
          buttonClassName="hover:underline"
        />
        <Button
          type="button"
          title="Forgot Password?"
          wrapperClassName="p-1 border border-white rounded-md"
          buttonClassName="hover:underline"
        />
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
