import React, { useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import LoginForm from "@/modules/login/components/LoginForm";
import MetaSEO from "@/common/components/MetaSEO";
import LoginHeader from "@/modules/login/components/LoginHeader";

const Login = () => {
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
      <div className="bg-gradient-to-br from-white via-slate-100 to-white h-screen">
        <div className="container mx-auto p-4 lg:px-0">
          <LoginHeader />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
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
