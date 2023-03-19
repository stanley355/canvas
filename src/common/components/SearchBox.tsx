import React from "react";
import classNames from "classnames";
import { FaSearch } from "react-icons/fa";

interface ISearchBox {
  placeholder: string;
  onSubmit: (e:any) => void;
}

const SearchBox = (props: ISearchBox) => {
  const {placeholder, onSubmit} = props;

  return (
    <form onSubmit={onSubmit} className={classNames("flex flex-row w-full lg:w-2/3", "animate-typing")}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        className="w-full bg-black text-white border-white border pl-2 rounded-sm"
      />
      <button type="submit" className="w-auto p-2 bg-white rounded-sm">
        <FaSearch className="text-2xl text-black" />
      </button>
    </form>
  );
};

export default SearchBox;
