import React, { useEffect } from "react";
import Layout from "@/common/components/Layout";
import RegisterForm from "@/modules/login/components/RegisterForm";
import Cookies from "js-cookie";
import MetaSEO from "@/common/components/MetaSEO";
import ReferralPromo from "@/common/components/ReferralPromo";

const Register = () => {
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
      <div className="container mx-auto p-4">
        <RegisterForm />
        <ReferralPromo />
      </div>
    </Layout>
  );
};

export default Register;
