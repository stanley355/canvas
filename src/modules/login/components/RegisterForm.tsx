import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { SiTaichilang } from "react-icons/si";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import GoogleLoginBtn from "./GoogleLoginBtn";
import Button from "@/common/components/Button";
import { validateRegisForm } from "../lib/validateRegisForm";
import { checkUserExist } from "../lib/checkUserExist";
import { IRegisterUser, registerUser } from "../lib/registerUser";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

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
      sendFirebaseEvent("register", {});
      Cookies.set("token", registerResult.token);
      window.location.href = "/login/";
      return;
    } else {
      setHasSubmit(false);
      toast.error("Something went wrong, please try again");
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center lg:w-1/3 lg:mx-auto">
      <h1 className="flex flex-row items-center mb-2">
        <SiTaichilang className="text-3xl" />
        <span className="ml-2 text-2xl ">Registration</span>
      </h1>
      <h2 className="text-2xl mb-4">
        Don&apos;t worry, it&apos;s always free !
      </h2>
      <div>Direct Registration via Google</div>
      <GoogleLoginBtn />
      <div className="my-2">or</div>
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
        <div className="flex flex-col mb-4">
          <label htmlFor="fullname">Fullname*</label>
          <input
            type="text"
            id="fullname_input"
            name="fullname"
            className="p-2 text-black rounded-sm"
            placeholder="myname"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password_input"
            name="password"
            className="p-2 text-black rounded-sm"
            placeholder="******"
          />
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="repassword">Retype Password*</label>
          <input
            type="password"
            id="repassword_input"
            name="repassword"
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
          {hasSubmit ? (
            <FaSpinner className="animate-spin mx-auto" />
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
