import React, { useEffect } from "react";
import RegisterForm from "@/modules/login/components/RegisterForm";
import Cookies from "js-cookie";
import MetaSEO from "@/common/components/MetaSEO";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import RegisterHeader from "@/modules/login/components/RegisterHeader";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";

const Register = () => {
  const seo = {
    title:
      "LanguageAI - 10x Better Writing Check and Translation for All Languages",
    description:
      "Discover LanguageAI's Checkbot and Translation products that provide 10x better grammar and translation accuracy than Grammarly and Google Translate. Our AI-powered technology can check your writing and correct grammar and spelling errors in any language. Translate any language in the world with LanguageAI, and provide context to get accurate and nuanced translations. Experience LanguageAI, the best language tool for writers and communicators worldwide.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  return (
    <div>
      <MetaSEO seo={seo} />
      <div className="h-screen bg-gradient-to-br from-white via-slate-100 to-white">
        <div className="container mx-auto p-4 lg:px-0 lg:w-1/4">
          <RegisterHeader />
          <RegisterForm />
          <div className="my-4 flex flex-col items-center">
            <div className="text-lg mb-2">or</div>
            <GoogleLoginBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/profile/",
      },
    };
  }

  return {
    props: {},
  };
};
