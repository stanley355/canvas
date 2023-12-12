import { toast } from "react-toastify";

export const validateRegisForm = (e: React.FormEvent<HTMLFormElement>) => {
  const target = e.target as any;
  const { email, fullname, password, repassword } = target;

  if (!email.value || !fullname.value || !password.value || !repassword.value) {
    toast.error("Harap isi semua data");
    return false;
  }

  if (password.value !== repassword.value) {
    toast.error("Password tidak sama dengan konfirmasi password");
    return false;
  }

  return true;
};
