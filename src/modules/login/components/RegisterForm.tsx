import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaKey, FaUser, FaSpinner } from "react-icons/fa6";
import Cookies from "js-cookie";

import Button from "@/common/components/Button";
import { validateRegisForm } from "../lib/validateRegisForm";
import { checkUserExist } from "../lib/checkUserExist";
import { IRegisterUser, registerUser } from "../lib/registerUser";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import RegisterFormInputField from "./RegisterFormInputField";

const RegisterForm = () => {
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSubmit(true);

    const inputValid = validateRegisForm(e);
    if (!inputValid) {
      setHasSubmit(false);
      return;
    }

    const target = e.target as any;
    const email = target.email.value;

    const userExist = await checkUserExist(email);
    if (userExist) {
      toast.error("User with the same email already exists!");
      setHasSubmit(false);
      return;
    }

    const payload: IRegisterUser = {
      email,
      fullname: target.fullname.value,
      password: target.password.value,
    };

    const registerResult = await registerUser(payload);

    if (registerResult?.token) {
      setHasSubmit(false);
      sendFirebaseEvent("register");
      Cookies.set("token", registerResult.token);
      window.location.href = "/profile/";
      return;
    } else {
      setHasSubmit(false);
      toast.error("Something went wrong, please try again");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <RegisterFormInputField
        icon={<FaEnvelope className="text-blue-900" />}
        title="Email"
        inputType="email"
        inputName="email"
        inputID="email"
        placeholder="myemail@email.com"
      />
      <RegisterFormInputField
        icon={<FaUser className="text-blue-900" />}
        title="Fullname"
        inputType="text"
        inputName="fullname"
        inputID="fullname_input"
        placeholder="fullname"
      />
      <RegisterFormInputField
        icon={<FaKey className="text-blue-900" />}
        title="Password"
        inputType="password"
        inputName="password"
        inputID="password_input"
        placeholder="********"
      />
      <RegisterFormInputField
        icon={<FaKey className="text-blue-900" />}
        title="Re-type Password"
        inputType="password"
        inputName="repassword"
        inputID="repassword_input"
        placeholder="********"
      />
      <button
        type="submit"
        disabled={hasSubmit}
        className="py-2 rounded-lg bg-blue-900 text-white text-lg w-full"
      >
        {hasSubmit ? (
          <FaSpinner className="animate-spin mx-auto" />
        ) : (
          "Register"
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
