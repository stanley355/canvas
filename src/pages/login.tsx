import React from "react";
import Layout from "@/common/components/Layout";
import LoginForm from "@/modules/login/components/LoginForm";
import MetaSEO from "@/common/components/MetaSEO";

const LoginPage = () => {
  const seo = {
    title:
      "LanguageAI - 10x Better Writing Check and Translation for All Languages",
    description:
      "Discover LanguageAI's Checkbot and Translation products that provide 10x better grammar and translation accuracy than Grammarly and Google Translate. Our AI-powered technology can check your writing and correct grammar and spelling errors in any language. Translate any language in the world with LanguageAI, and provide context to get accurate and nuanced translations. Experience LanguageAI, the best language tool for writers and communicators worldwide.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
  };

  return (
    <Layout>
      <MetaSEO seo={seo} />
      <div className="container mx-auto flex items-center justify-center my-20 px-4">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
