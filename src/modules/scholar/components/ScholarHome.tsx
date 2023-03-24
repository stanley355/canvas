import React from "react";
import Router from "next/router";
import SearchBox from "@/common/components/SearchBox";

const ScholarHome = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-12 px-4">
      <h1 className="font-bold text-3xl mb-4 lg:text-4xl">
        Scholar Research Data
      </h1>
      <SearchBox
        placeholder="What am I researching today?"
        onSubmit={(val) => Router.push(`/scholar?q=${val}`)}
        className="lg:w-2/3"
      />
      <div className="text-lg mt-4">Knowledge is Power</div>
    </div>
  );
};

export default ScholarHome;
