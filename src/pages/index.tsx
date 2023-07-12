import React from "react";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeServices from "@/modules/home/components/HomeServices";
import HomeFeaturedIn from "@/modules/home/components/HomeFeaturedIn";
import HomeStatistic from "@/modules/home/components/HomeStatistic";
import LoginForm from "@/modules/login/components/LoginForm";
import { HOME_SEO } from "@/modules/home/lib/constant";

const Home = () => {
  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <HomeHero />
      <div className="container mx-auto">

        <HomeServices />
        <HomeFeaturedIn />
        <HomeStatistic />
        <div className="py-4">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
