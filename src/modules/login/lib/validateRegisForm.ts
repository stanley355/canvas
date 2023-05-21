import { toast } from "react-toastify";

export const validateRegisForm = (e: React.FormEvent<HTMLFormElement>) => {
  const target = e.target as any;
  const {email, fullname, password, repassword} = target;

  if (!email.value || !fullname.value || !password.value || !repassword.value) {
    toast.error("All Field Should not be Empty!");
    return false;
  }

  if (password.value !== repassword.value)  {
    toast.error("Password does not match!");
    return false;
  }

  return true;
}