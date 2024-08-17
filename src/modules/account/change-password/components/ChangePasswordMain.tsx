import { useRouter } from "next/router";
import { TbArrowLeft } from "react-icons/tb";
import Button from "@/common/components/Button";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePasswordMain = () => {
  const router = useRouter();

  return (
    <div className="lg:min-w-[33%] my-auto py-4 lg:px-4">
      <Button
        variant="link"
        className="p-2 ml-2 text-xl border border-transparent rounded-full hover:border-black"
        onClick={() => router.push("/account/")}
      >
        <TbArrowLeft />
      </Button>

      <div className="p-4">
        <h1 className="mb-2 text-2xl font-bold">Change password</h1>
        <h2 className="mb-4">Please input old and new password</h2>

        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePasswordMain;
