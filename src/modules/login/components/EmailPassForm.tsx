import React, { useState } from "react";
import Router from "next/router";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import Cookies from "js-cookie";
import Button from "@/common/components/Button";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { loginUser } from "../lib/loginUser";

const EmailPassForm = () => {
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

    const payload = {
      email,
      password,
    };

    sendFirebaseEvent("login", {});
    const user = await loginUser(payload);
    if (user?.error) {
      setHasSubmit(false);
      toast.error(user.message);
      return;
    }

    if (user?.token) {
      sendFirebaseEvent("login_email_password", {});
      setHasSubmit(false);
      Cookies.set("token", user.token);

      const path = Router.asPath;
      if (path === "/register" || path === "/login") {
        window.location.href = "/";
        return;
      }

      window.location.href = path;
      return;
    }

    toast.error("Something went wrong, please try again");
    setHasSubmit(false);
    return;
  };
  return (
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
  );
};

export default EmailPassForm;
