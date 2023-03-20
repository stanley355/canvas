import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import classNames from "classnames";

import SearchBox from "@/common/components/SearchBox";
import HomePageLayout from "@/modules/home/components/Layout";
import MetaSEO from "@/common/components/MetaSEO";

import { fetchDatoCms } from "@/common/lib/fetchDatoCms";
import { HOME_SEO_QUERY } from "@/modules/home/lib/query";
import packageJson from "../..//package.json";

const inter = Inter({ subsets: ["latin"] });

const Home = (props: any) => {
  const { seo } = props;

  const [showSearch, setShowSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const AdvanceSearch = dynamic(
    () => import("../common/components/AdvanceSearchPopup"),
    {
      ssr: false,
    }
  );

  useEffect(() => {
    setTimeout(() => setShowSearch(true), 2000);
  }, [showSearch]);

  return (
    <HomePageLayout>
      <MetaSEO seo={seo} />
      {searchVal && (
        <AdvanceSearch
          className="lg:w-1/3"
          placeholder={searchVal}
          onCloseClick={() => setSearchVal("")}
        />
      )}
      <div className="pt-40 flex flex-col items-center justify-center px-4 ">
        <h1
          className={classNames(
            "text-4xl text-center font-semibold leading-10 mb-8",
            inter.className,
            "animate-typing"
          )}
        >
          All The Data You Need in The World
        </h1>
        {showSearch && (
          <SearchBox
            className="animate-home-searchbox lg:w-2/3"
            placeholder="Start Searching"
            onSubmit={(val) => setSearchVal(val)}
          />
        )}
        <div>Beta v{packageJson.version}</div>
      </div>
    </HomePageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const datoSEO: any = await fetchDatoCms({
    query: HOME_SEO_QUERY,
    variables: "",
  });

  return {
    props: {
      seo: datoSEO?.home?.seo ?? null,
    },
  };
};

export default Home;
