import React, { useEffect } from "react";
import Layout from "@/common/components/Layout";
import LoginForm from "@/modules/login/components/LoginForm";
import MetaSEO from "@/common/components/MetaSEO";
import Cookies from "js-cookie";

const LoginPage = () => {
  const seo = {
    title:
      "LanguageAI - 10x Better Writing Check and Translation for All Languages",
    description:
      "Discover LanguageAI's Checkbot and Translation products that provide 10x better grammar and translation accuracy than Grammarly and Google Translate. Our AI-powered technology can check your writing and correct grammar and spelling errors in any language. Translate any language in the world with LanguageAI, and provide context to get accurate and nuanced translations. Experience LanguageAI, the best language tool for writers and communicators worldwide.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  useEffect(() => {
    const cookieToken = Cookies.get("token");
    if (cookieToken) {
      window.location.href = "/profile/";
    }
  }, []);

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="bg-gradient-to-b from-black via-blue-900 to-white pb-4">
        <div className="container py-4 h-screen mx-auto">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
