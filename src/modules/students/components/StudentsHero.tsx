import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { TbPercentage } from "react-icons/tb";

import { Button } from "@/common/components/ui/button";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";

const StudentsHero = () => {
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) setShowLogin(false);
  }, [router]);

  return (
    <div className="container px-4 py-8 mx-auto mt-12 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:place-items-center">
      <div className="mb-8 text-white">
        <h1 className="mb-8">LanguageAi for Students</h1>
        <div className="mb-8 text-3xl font-bold">
          AI That Helps You Make the Grade
        </div>
        <div className="mb-8 lg:w-3/4">
          LanguageAi is your AI writing partner that makes it easy to raise your
          grades and meet your goals with writing feedback for school and
          beyond.
        </div>

        <div className="items-center gap-2 mb-2 lg:flex">
          <Button
            variant={"secondary"}
            onClick={() => router.push("/plans/")}
            className="gap-2 mb-4 text-lg font-bold text-indigo-900 border rounded lg:mb-0 lg:text-sm"
          >
            <TbPercentage className="text-lg font-bold" />
            <span>Check Student Discount</span>
          </Button>
          {showLogin && <GoogleLoginBtn />}
        </div>
        <div className="text-sm lg:w-3/4">
          * This site is protected by reCAPTCHA and the Google
          <Link
            href={"https://policies.google.com/privacy"}
            target="_blank"
            className="mx-1 border-b "
          >
            Privacy Policy
          </Link>
          and
          <Link
            href={"https://policies.google.com/terms"}
            target="_blank"
            className="mx-1 border-b "
          >
            Terms of Service
          </Link>
          apply.
        </div>
      </div>
      <Image
        src="/images/students/students_hero.webp"
        alt="LanguageAi for Students"
        width={1262}
        height={830}
        className="rounded-md lg:w-full"
      />
    </div>
  );
};

export default StudentsHero;
