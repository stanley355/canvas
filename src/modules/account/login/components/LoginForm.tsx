import Link from "next/link";
import { FormEvent, useState } from "react";
import Button from "@/common/components/Button";
import Input from "@/common/components/Input";
import Cookies from "js-cookie";
import { TbProgress } from "react-icons/tb";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const { fullname, email, password, repassword } = target;

    if (!fullname.value) {
      setErrorMsg("Fullname can't be empty");
      return;
    }

    if (!password.value) {
      setErrorMsg("Password can't be empty");
      return;
    }





    setIsLoading(true);
    // const registerRequest = {
    //   fullname: fullname.value,
    //   email: email.value,
    //   password: password.value,
    //   password_again: repassword.value,
    // };

    // const register = await fetchUsersRegister(registerRequest);

    // setIsLoading(false);

    // if (register.status === 400) {
    //   setErrorMsg(register.status_text);
    //   return;
    // }

    // if (register?.token) {
    //   Cookies.set("token", register.token);
    //   window.location.href = "/account/";
    //   return register;
    // }

    setErrorMsg("Server error, please try again");
    return;
  };

  return (
    <div>
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
          <Link href="/account/forgot-password/" className="underline hover:text-blue-800">
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
    </div>
  );
};

export default LoginForm;
