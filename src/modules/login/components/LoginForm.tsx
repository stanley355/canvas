import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { FaEnvelope, FaKey } from "react-icons/fa6";
import Cookies from "js-cookie";
import { decode } from "jsonwebtoken";
import LogRocket from "logrocket";

import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { loginUser } from "../lib/loginUser";
import LoginFormInputField from "./LoginFormInputField";

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
      toast.error("Harap masukkan email dan password");
      return;
    }

    const payload = {
      email,
      password,
    };

    sendFirebaseEvent("login");
    const user = await loginUser(payload);

    if (user?.data?.error) {
      setHasSubmit(false);
      toast.error(user.data.message);
      return;
    }

    if (user?.token) {
      sendFirebaseEvent("login_email_password");
      setHasSubmit(false);

      Cookies.set("token", user.token);
      const decodedToken: any = decode(String(user.token));
      LogRocket.identify(decodedToken.id, {
        name: decodedToken.name,
        email: decodedToken.email
      });

      window.location.href = "/profile";
      return;
    }

    toast.error("Terjadi kesalahan, silakan coba lagi");
    setHasSubmit(false);
    return;
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <LoginFormInputField
        icon={<FaEnvelope className="text-blue-900" />}
        title="Email"
        inputType="email"
        inputName="email"
        inputID="email"
        placeholder="myemail@email.com"
      />
      <LoginFormInputField
        icon={<FaKey className="text-blue-900" />}
        title="Password"
        inputType="password"
        inputName="password"
        inputID="password_input"
        placeholder="********"
      />
      <button
        type="submit"
        disabled={hasSubmit}
        className="py-2 rounded-lg bg-blue-900 text-white text-lg w-full"
      >
        {hasSubmit ? <FaSpinner className="animate-spin mx-auto" /> : "Masuk"}
      </button>
    </form>
  );
};

export default LoginForm;
