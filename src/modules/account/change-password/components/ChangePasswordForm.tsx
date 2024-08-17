import { FormEvent, useState } from "react";
import { TbProgress } from "react-icons/tb";
import Cookies from "js-cookie";
import { decode, JwtPayload } from "jsonwebtoken";

import Button from "@/common/components/Button";
import Input from "@/common/components/Input";
import { fetchUsersChangePassword } from "@/common/lib/api/users/fetchUsersChangePassword";

const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const { old_password, new_password, new_repassword } = target;

    if (!old_password.value) {
      setErrorMsg("Old password can't be empty");
      return;
    }
    if (!new_password.value) {
      setErrorMsg("New Password can't be empty");
      return;
    }
    if (!new_repassword.value) {
      setErrorMsg("Re-type New Password can't be empty");
      return;
    }

    if (String(new_password.value).length < 4) {
      setErrorMsg("Invalid new password: 4 characters minimum");
      return;
    }

    if (new_password.value !== new_repassword.value) {
      setErrorMsg(
        "Invalid new password: New Password is not similar to re-typed new password"
      );
      return;
    }

    setIsLoading(true);
    const token= Cookies.get('token')
    const user = decode(String(token)) as JwtPayload;
    
    const request = {
      id: user.id,
      old_password: old_password.value,
      new_password: new_password.value,
      new_password_again: new_repassword.value
    };
    
    const changePass = await fetchUsersChangePassword(request);
    setIsLoading(false);

    if (changePass.status === 400) {
      setErrorMsg(changePass.status_text);
      return;
    }


    
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
    </div>
  );
};

export default ChangePasswordForm;
