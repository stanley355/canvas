import React from "react";
import { GetStaticProps } from "next";

import MetaSEO from "@/common/components/MetaSEO";

const Home = (props: any) => {
  const { seo } = props;

  return (
    <>
      <MetaSEO seo={seo} />
      <h1>hi</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
    },
  };
};

export default Home;
