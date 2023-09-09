import React from "react";
import Layout from "@/common/components/Layout";
import { GetServerSideProps } from "next";
import Link from "next/link";


const PremiumTranslate = () => {

  return (
    <Layout>
      <div className="container mx-auto p-4 h-screen flex flex-col items-center border border-white">
        <h1 className="text-3xl mb-8">This page has been moved</h1>
        <Link href="/translate" className="w-fit mx-auto bg-white text-black p-4 rounded-lg">Click here to redirect</Link>
      </div>
    </Layout>
  );
};

export default PremiumTranslate;
export const getServerSideProps: GetServerSideProps = async () => {

  return {
    redirect: {
      permanent: true,
      destination: "/translate/",
    },
  };
};
