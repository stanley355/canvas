import React from "react";

import { HOME_SEO } from "@/modules/home/lib/constant";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeCopywriting from "@/modules/home/components/HomeCopywriting";
import LoginForm from "@/modules/login/components/LoginForm";
import { PlansSection } from "./plans";

const Home = () => {
  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <HomeHero />
      <HomeCopywriting />
      <div className="bg-white">
        <PlansSection />
      </div>
      <div className="lg:py-16 bg-gradient-to-b from-white via-blue-500 to-black">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default Home;
