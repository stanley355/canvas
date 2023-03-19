import React from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import SearchBox from "@/common/components/SearchBox";
import HomePageLayout from "@/modules/home/components/Layout";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <HomePageLayout>
      <div className="pt-40 flex flex-col items-center justify-center px-4 ">
        <h1
          className={classNames(
            "text-4xl text-center font-semibold leading-10",
            inter.className,
            "animate-typing"
          )}
        >
          All The Data You Need in The World
        </h1>
        <SearchBox
          placeholder="Start Searching"
          onSubmit={(e) => console.log("hi")}
        />
      </div>
    </HomePageLayout>
  );
};

export default Home;
