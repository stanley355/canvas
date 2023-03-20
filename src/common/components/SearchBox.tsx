import React, { useState } from "react";
import classNames from "classnames";
import { sendFirebaseEvent } from "../lib/firebase/sendFirebaseEvent";
import { FaSearch, FaSpinner } from "react-icons/fa";

interface ISearchBox {
  className?: string;
  isLoading?: boolean;
  placeholder: string;
  onChange?: (searchVal: any) => void;
  onSubmit: (searchVal: any) => void;
}

const SearchBox = (props: ISearchBox) => {
  const { className, isLoading, placeholder, onChange, onSubmit } = props;
  const [showError, setShowError] = useState(false);

  const handleOnChange = (e: any) => {
    if (showError) setShowError(false);
    if (onChange) onChange(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchVal = e.target.search.value;

    if (!searchVal) {
      setShowError(true);
      return "";
    }

    sendFirebaseEvent("search", { value: searchVal });
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
        onChange={handleOnChange}
        placeholder={showError ? "Input should not be empty" : placeholder}
        className={classNames(
          "w-full bg-black text-white border-white border pl-2 rounded-sm",
          showError ? "bg-red-400 placeholder-white" : ""
        )}
      />
      <button type="submit" className="w-auto p-2 bg-white rounded-sm" aria-label="search">
        {isLoading ? (
          <FaSpinner className="text-2xl text-black animate-spin" />
        ) : (
          <FaSearch className="text-2xl text-black" />
        )}
      </button>
    </form>
  );
};

export default SearchBox;
