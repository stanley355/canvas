import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEnvelope, FaKey, FaSpinner, FaUser } from "react-icons/fa";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import Button from "@/common/components/Button";
import GoogleLoginBtn from "./GoogleLoginBtn";
import { checkUserExist } from "../lib/checkUserExist";
import initFirebaseApp from "@/common/lib/firebase/initFirebaseApp";

const RegisForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const email = target.email.value;
    const fullname = target.fullname.value;
    const password = target.password.value;
    const repassword = target.repassword.value;
    setIsLoading(true);

    if (!email) {
      setIsLoading(false);
      toast.error("Email is required!");
      return;
    }

    if (!fullname) {
      setIsLoading(false);
      toast.error("Fullname is required!");
      return;
    }

    if (!password || !repassword) {
      setIsLoading(false);
      toast.error("Password is required!");
      return;
    }

    if (password !== repassword) {
      setIsLoading(false);
      toast.error("Password not match!");
      return;
    }

    // const userExist = await checkUserExist(email);
    const userExist = false;
    if (userExist) {
      setIsLoading(false);
      toast.error("User with the same email already exists!");
      return;
    } else {
      // const data = {
      //   fullname,
      //   email,
      //   password,
      // };
      // const verification_token = jwt.sign(data, "secret");
      // Cookies.set("verification_token", verification_token);
      const app = initFirebaseApp();
      const auth = getAuth(app);
      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: "https://www.example.com/verification/",
        // This must be true.
        handleCodeInApp: true,
      };
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          console.log("success");
          window.localStorage.setItem("emailForSignIn", email);
          // ...
        })
        .catch((error) => {
          console.log("error: ", error);
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
        });
    }
  };

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
      <form onSubmit={handleSubmit}>
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
            <FaUser />
            <span className="text-lg ml-2">Fullname</span>
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname_input"
            aria-label="fullname_input"
            placeholder="fullname"
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
          disabled={isLoading}
          wrapperClassName="text-center p-2 bg-transparent border rounded-md font-semibold mb-4 cursor-pointer hover:bg-white hover:text-gray-600"
        >
          {isLoading ? (
            <div className="flex flex row items-center justify-center">
              <span className="mr-2">Registering</span>
              <FaSpinner className="animate-spin" />
            </div>
          ) : (
            "Register"
          )}
        </Button>
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
