import GoogleLoginBtn from "./GoogleLoginBtn";
import LoginForm from "./LoginForm";
import { CardContent } from "@/common/components/ui/card";

const LoginCardContent = () => {
  return (
    <CardContent>
      <LoginForm />
      <div className="text-sm text-gray-500 border-b border-gray-500 w-fit">
        Can&apos;t Sign In?
      </div>
      <div className="mt-4">
        <GoogleLoginBtn />
      </div>
    </CardContent>
  );
};

export default LoginCardContent;
