import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import SearchBox from "@/common/components/SearchBox";
import HomePageLayout from "@/modules/home/components/Layout";
import packageJson from "../..//package.json";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSearch(true), 2000);
  }, [showSearch]);

  return (
    <HomePageLayout>
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
            className="animate-home-searchbox"
            placeholder="Start Searching"
            onSubmit={(e) => console.log("hi")}
          />
        )}

        <div>Beta v{packageJson.version}</div>
      </div>
    </HomePageLayout>
  );
};

export default Home;
