import React, { useState } from "react";
import classNames from "classnames";
import { FaSearch } from "react-icons/fa";

interface ISearchBox {
  className?: string;
  placeholder: string;
  onSubmit: (searchVal: any) => void;
}

const SearchBox = (props: ISearchBox) => {
  const { className, placeholder, onSubmit } = props;
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchVal = e.target.value;

    if (!searchVal) {
      setShowError(true);
      return "";
    }
    onSubmit(searchVal);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("flex flex-row w-full", className)}
    >
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e: any) => setShowError(false)}
        placeholder={showError ? "Input should not be empty" : placeholder}
        className={classNames(
          "w-full bg-black text-white border-white border pl-2 rounded-sm",
          showError ? "bg-red-400 placeholder-white" : ""
        )}
      />
      <button type="submit" className="w-auto p-2 bg-white rounded-sm">
        <FaSearch className="text-2xl text-black" />
      </button>
    </form>
  );
};

export default SearchBox;
