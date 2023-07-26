import React from "react";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import HomeHero from "@/modules/home/components/HomeHero";
import { HOME_SEO } from "@/modules/home/lib/constant";
import HomeCopywriting from "@/modules/home/components/HomeCopywriting";
import { HEADER_MENU } from "@/common/components/Header/constant";
import Button from "@/common/components/Button";
import ReferralPromo from "@/common/components/ReferralPromo";
import LoginForm from "@/modules/login/components/LoginForm";

const Home = () => {

  const SOLUTIONS = [HEADER_MENU[0], HEADER_MENU[3], HEADER_MENU[5]];

  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <HomeHero />
      <HomeCopywriting />
      <div className="bg-white">
        <div className="container mx-auto ">
          <ReferralPromo />
        </div>
      </div>
      <div className="container mx-auto h-fit py-20">

      <LoginForm />
      </div>
    </Layout>
  );
};

export default Home;
