import Button from "@/common/components/Button";
import React from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { SiTaichilang } from "react-icons/si";

const LoginForm = () => {
  return (
    <div className="border border-white bg-gray-600 rounded-md p-4 mt-20 w-3/4 lg:w-1/2">
      <h1 className="flex flex-row items-center justify-center text-2xl font-bold">
        <SiTaichilang />
        <span className="ml-2">LanguageAI Login</span>
      </h1>
      <h2 className="text-center text-lg mb-4">Don't worry, it's still free</h2>
      <form
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

        <Button type="button" title="Login" wrapperClassName="text-center p-2 bg-transparent border rounded-md font-semibold"/>
      </form>
    </div>
  );
};

export default LoginForm;
