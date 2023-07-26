import React from "react";
import Link from "next/link";
import Image from "next/image";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import HomeHero from "@/modules/home/components/HomeHero";
import LoginForm from "@/modules/login/components/LoginForm";
import { HOME_SEO } from "@/modules/home/lib/constant";
import HomeCopywriting from "@/modules/home/components/HomeCopywriting";

const Home = () => {
  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <HomeHero />
      <HomeCopywriting />
    </Layout>
  );
};

export default Home;
