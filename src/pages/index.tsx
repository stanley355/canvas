import React from "react";
import { GetStaticProps } from "next";
import MetaSEO from "@/common/components/MetaSEO";
import Layout from "@/common/components/Layout";
import HomeHero from "@/modules/home/components/HomeHero";
import HomeServices from "@/modules/home/components/HomeServices";
import HomeFeaturedIn from "@/modules/home/components/HomeFeaturedIn";
import HomeStatistic from "@/modules/home/components/HomeStatistic";
import LoginForm from "@/modules/login/components/LoginForm";
import { fetchDatoCms } from "@/common/lib/fetchDatoCms";
import { HOME_GRAPHQL_QUERY } from "@/modules/home/lib/graphqlquery";

const Home = (props: any) => {
  const { dato } = props;

  return (
    <Layout>
      <MetaSEO seo={dato?.blog} />
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
export const getStaticProps: GetStaticProps = async () => {
  const dato: any = await fetchDatoCms(HOME_GRAPHQL_QUERY);
  if (dato?.blog) {
    dato.url = process.env.NEXT_PUBLIC_BASE_URL;
  }

  return {
    props: { dato }
  }
}
