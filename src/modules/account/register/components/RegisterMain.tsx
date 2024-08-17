import Link from "next/link";
import { useRouter } from "next/router";
import { TbArrowLeft } from "react-icons/tb";
import Button from "@/common/components/Button";
import GoogleLoginBtn from "../../login/components/GoogleLoginBtn";
import RegisterForm from "./RegisterForm";

const RegisterMain = () => {
  const router = useRouter();

  return (
    <div className="lg:min-w-[33%] my-auto py-4 lg:px-4">
      <Button
        variant="link"
        className="p-2 ml-2 text-xl border border-transparent rounded-full hover:border-black"
        onClick={() => router.push("/account/login")}
      >
        <TbArrowLeft />
      </Button>

      <div className="p-4">
        <h1 className="mb-2 text-2xl font-bold">Sign up</h1>
        <h2 className="mb-4">Sign up or register to languageai</h2>

        <RegisterForm />

        <div className="my-4 text-center">or</div>

        <div className="flex flex-col items-center justify-center gap-8">
          <GoogleLoginBtn />
          <Link
            href="/account/login/"
            className="underline hover:text-blue-800"
          >
            Have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterMain;
