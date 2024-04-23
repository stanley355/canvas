import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { Button } from "@/common/components/ui/button";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";

const HomeHero = () => {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) setShowLogin(false);
  }, [router]);

  return (
    <div className="container mx-auto mt-20 lg:grid lg:grid-cols-2 lg:mt-12">
      <div>
        <div className="mb-8 text-3xl font-bold lg:text-5xl">
          Responsible AI that ensures your writing and reputation shine
        </div>
        <div className="mb-8 text-lg lg:text-xl">
          Work with an AI writing partner that helps you find the words you need
          to write that tricky email, to get your point across, to keep your
          work moving.
        </div>
        {showLogin && (
          <div className="mb-4 lg:flex lg:gap-2">
            <Button
              className="w-full p-6 mb-6 text-lg text-white shadow-lg lg:text-md lg:p-4 lg:w-1/3 bg-emerald-700 hover:bg-emerald-600"
              onClick={() => router.push("/login")}
            >
              Sign up it&apos;s free
            </Button>
            <GoogleLoginBtn />
          </div>
        )}
        <div>
          This site is protected by reCAPTCHA and the Google
          <Link
            href={"https://policies.google.com/privacy"}
            target="_blank"
            className="mx-1 text-blue-600 border-b border-b-blue-600"
          >
            Privacy Policy
          </Link>
          and
          <Link
            href={"https://policies.google.com/terms"}
            target="_blank"
            className="mx-1 text-blue-600 border-b border-b-blue-600"
          >
            Terms of Service
          </Link>
          apply.
        </div>
      </div>
      <Image
        src={"/images/languageai.png"}
        alt="LanguageAi"
        width={1024}
        height={1024}
        className="mx-auto lg:w-1/2 lg:h-auto"
        loading="eager"
      />
    </div>
  );
};

export default HomeHero;
