import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import classNames from "classnames";
import SearchBox from "@/common/components/SearchBox";
import HomePageLayout from "@/modules/home/components/Layout";
import AdvanceSearchPopup from "@/common/components/AdvanceSearchPopup";
import packageJson from "../..//package.json";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
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
      {searchVal && <AdvanceSearch placeholder={searchVal} onCloseClick={() => setSearchVal("")}/>}
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

export default Home;
