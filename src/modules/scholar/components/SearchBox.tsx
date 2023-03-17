import React from "react";
import Router from "next/router";
import { FaSearch } from "react-icons/fa";

const ScholarSearchBox = ({query}:any) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (searchValue) {
      Router.push(`/scholar?q=${searchValue}`);
    } else {
      return "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row w-full lg:w-2/3">
      <input
        type="text"
        name="search"
        id="search"
        placeholder={query && query.q ? query.q : ""}
        className="w-full bg-black text-white border-white border pl-2 rounded-sm"
      />
      <button type="submit" className="w-auto p-2 bg-white rounded-sm">
        <FaSearch className="text-2xl text-black" />
      </button>
    </form>
  );
};

export default ScholarSearchBox;
