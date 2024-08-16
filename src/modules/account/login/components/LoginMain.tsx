import Link from "next/link";
import { useRouter } from "next/router";
import { TbArrowLeft } from "react-icons/tb";
import Button from "@/common/components/Button";
import GoogleLoginBtn from "@/modules/account/login/components/GoogleLoginBtn";
import LoginForm from "./LoginForm";

const LoginMain = () => {
  const router = useRouter();

  return (
    <div className="lg:min-w-[33%] my-auto py-4 lg:px-4">
      <Button
        variant="link"
        className="p-2 ml-2 text-xl border border-transparent rounded-full hover:border-black"
        onClick={() => router.push("/")}
      >
        <TbArrowLeft />
      </Button>

      <div className="p-4">
        <h1 className="mb-2 text-2xl font-bold">Sign in</h1>
        <h2 className="mb-4">Sign up or login to languageai</h2>

        <LoginForm />

        <div className="my-4 text-center">or</div>

        <div className="flex flex-col items-center justify-center gap-8">
          <GoogleLoginBtn />
          <Link
            href="/account/register/"
            className="underline hover:text-blue-800"
          >
            Don&apos;t have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
