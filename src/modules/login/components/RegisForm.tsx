import React from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { SiTaichilang } from "react-icons/si";
import Button from "@/common/components/Button";
import GoogleLoginBtn from "./GoogleLoginBtn";

const RegisForm = () => {
  return (
    <div className="border border-white bg-gray-600 rounded-md p-4 lg:w-1/3">
      <h1 className="flex flex-row items-center justify-center pl-16 lg:pl-0 text-2xl font-bold">
        LanguageAI Registration
      </h1>
      <h2 className="text-center text-lg mb-4">Don't worry, it's still free</h2>
      <GoogleLoginBtn />
      <form
        className="mt-4"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="email_input" className="flex flex-row items-center">
            <FaEnvelope />
            <span className="text-lg ml-2">Email</span>
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
        <div className="flex flex-col mb-4">
          <label htmlFor="email_input" className="flex flex-row items-center">
            <FaKey />
            <span className="text-lg ml-2">Password</span>
          </label>
          <input
            type="password"
            name="password"
            id="password_input"
            aria-label="password_input"
            placeholder="*****"
            className="p-2 rounded-md text-black"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email_input" className="flex flex-row items-center">
            <FaKey />
            <span className="text-lg ml-2">Re-type password</span>
          </label>
          <input
            type="password"
            name="repassword"
            id="repassword_input"
            aria-label="repassword_input"
            placeholder="*****"
            className="p-2 rounded-md text-black"
          />
        </div>

        <Button
          type="button"
          title="Register"
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

export default RegisForm;
