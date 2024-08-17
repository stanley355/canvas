import Link from "next/link";
import { FormEvent, useState } from "react";
import Cookies from "js-cookie";
import { TbProgress } from "react-icons/tb";

import Button from "@/common/components/Button";
import Input from "@/common/components/Input";

import { fetchUsersLogin } from "@/common/lib/api/users/fetchUsersLogin";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const { email, password } = target;

    if (!email.value) {
      setErrorMsg("Email can't be empty");
      return;
    }

    if (!password.value) {
      setErrorMsg("Password can't be empty");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent(FIREBASE_EVENT_NAMES.login.login);
    const registerRequest = {
      email: email.value,
      password: password.value,
    };

    const login = await fetchUsersLogin(registerRequest);
    setIsLoading(false);

    if (login?.status === 400) {
      setErrorMsg(login.status_text);
      return;
    }

    if (login?.token) {
      Cookies.set("token", login.token);
      window.location.href = "/account/";
      return login;
    }

    setErrorMsg("Server error, please try again");
    return;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email_input">Email</label>
        <Input
          type="email"
          name="email"
          id="email_input"
          className="mb-4"
          onChange={() => setErrorMsg("")}
        />
        <div className="flex items-center justify-between">
          <label htmlFor="password_input">Password</label>
          <Link
            href="/account/forgot-password/"
            className="underline hover:text-blue-800"
          >
            forgot password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          id="password_input"
          className="mb-4"
          onChange={() => setErrorMsg("")}
        />
        <Button type="submit" className="w-full">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <TbProgress className="animate-spin" />
              <span>Signing in</span>
            </div>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
      <span className="text-red-600">{errorMsg}</span>
    </>
  );
};

export default LoginForm;
