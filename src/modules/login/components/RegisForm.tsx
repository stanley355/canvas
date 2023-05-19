import React from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import Button from "@/common/components/Button";
import GoogleLoginBtn from "./GoogleLoginBtn";

const RegisForm = () => {
  return (
    <div className="bg-transparent">
      <h1 className="text-center text-2xl font-bold">
        LanguageAI Registration
      </h1>
      <h2 className="text-center text-2xl mb-4">
        Don&apos;t worry, it&apos;s always free!
      </h2>
      <div className="text-lg mt-8 flex flex-col items-center justify-center">
        <div className="mb-2">Direct Registration via Google:</div>
        <GoogleLoginBtn />
      </div>
      <div className="text-center my-4 font-semibold">OR</div>
      <div className="text-lg text-center mb-2">
        Register with Email & Password:
      </div>
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
          type="submit"
          title="Register"
          wrapperClassName="text-center p-2 bg-transparent border rounded-md font-semibold mb-4 cursor-pointer hover:bg-white hover:text-gray-600"
        />
      </form>
      <div className="my-8 flex flex-row justify-between text-lg">
        <Button
          type="link"
          href="/login/"
          title="Login"
          wrapperClassName="underline hover:text-blue-500"
        />
        <Button
          type="link"
          href="/forgot-password/"
          title="Forgot Password?"
          wrapperClassName="underline hover:text-blue-500"
        />
      </div>
    </div>
  );
};

export default RegisForm;
