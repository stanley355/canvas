import { FormEvent, useState } from "react";
import { TbProgress } from "react-icons/tb";
import Cookies from "js-cookie";

import Button from "@/common/components/Button";
import Input from "@/common/components/Input";
import { fetchUsersRegister } from "@/common/lib/api/users/fetchUsersRegister";

const ChangePasswordForm = () => {
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

    if (!email.value) {
      setErrorMsg("Email can't be empty");
      return;
    }
    if (!password.value) {
      setErrorMsg("Password can't be empty");
      return;
    }
    if (!repassword.value) {
      setErrorMsg("Re-type Password can't be empty");
      return;
    }

    if (fullname.value.length < 4) {
      setErrorMsg("Invalid fullname: 4 characters minimum");
      return;
    }

    const hasSymbolRegex = /[^A-Za-z0-9\s]/g;
    if (hasSymbolRegex.test(fullname.value)) {
      setErrorMsg("Invalid fullname: Fullname can't contain symbol");
      return;
    }

    const validEmailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/g;
    if (!validEmailRegex.test(email.value)) {
      setErrorMsg("Invalid email: format");
      return;
    }

    if (String(password.value).length < 4) {
      setErrorMsg("Invalid password: 4 characters minimum");
      return;
    }

    if (password.value !== repassword.value) {
      setErrorMsg(
        "Invalid password: Password is not similar to re-typed password"
      );
      return;
    }

    // setIsLoading(true);
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
        <label htmlFor="old_password_input">Old Password</label>
        <Input
          type="password"
          name="old_password"
          id="old_password_input"
          className="mb-4"
          onChange={() => setErrorMsg("")}
        />
        <label htmlFor="new_password_input">New Password</label>
        <Input
          type="password"
          name="new_password"
          id="new_password_input"
          className="mb-4"
          onChange={() => setErrorMsg("")}
        />
        <label htmlFor="new_repassword_input">Re-type New Password</label>
        <Input
          type="password"
          name="new_repassword"
          id="new_repassword_input"
          className="mb-4"
          onChange={() => setErrorMsg("")}
        />
        <Button type="submit" className="w-full">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <TbProgress className="animate-spin" />
              <span>Changing</span>
            </div>
          ) : (
            "Change my password"
          )}
        </Button>
      </form>
      <span className="text-red-600">{errorMsg}</span>
      {/* <span className="font-bold">{errorMsg}</span> */}
    </div>
  );
};

export default ChangePasswordForm;
