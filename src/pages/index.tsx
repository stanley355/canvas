import React from "react";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import HomeHero from "@/modules/home/components/HomeHero";
import { HOME_SEO } from "@/modules/home/lib/constant";
import HomeCopywriting from "@/modules/home/components/HomeCopywriting";
import LoginForm from "@/modules/login/components/LoginForm";

const Home = () => {
  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <HomeHero />
      <HomeCopywriting />
      <div className="lg:py-16 bg-gradient-to-b from-white via-blue-500 to-black">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Home;
