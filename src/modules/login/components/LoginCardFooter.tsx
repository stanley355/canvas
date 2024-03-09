import { CardFooter } from "@/common/components/ui/card";
import Link from "next/link";

const LoginCardFooter = () => {
  return (
    <CardFooter className="block text-sm text-gray-500">
      This site is protected by reCAPTCHA and the Google
      <Link
        href={"https://policies.google.com/privacy"}
        target="_blank"
        className="mx-1 border-b border-gray-500"
      >
        Privacy Policy
      </Link>
      and
      <Link
        href={"https://policies.google.com/terms"}
        target="_blank"
        className="mx-1 border-b border-gray-500"
      >
        Terms of Service
      </Link>
      apply.
    </CardFooter>
  );
};

export default LoginCardFooter;
