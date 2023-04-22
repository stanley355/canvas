import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "@/common/components/Button";

const WorldDictionaryForm = () => {
  return (
    <form onSubmit={() => {}} className="my-8">
      <div className="flex flex-row items-center border border-white rounded-md">
        <FaSearch className="text-2xl m-2" />
        <input
          type="text"
          name="search_text"
          id="search_text_input"
          placeholder="Just give me any word"
          className="w-full bg-transparent border-l border-white p-2"
        />
      </div>
      <Button
        type="submit"
        title="Submit"
        wrapperClassName="w-full mt-4"
        buttonClassName="w-full text-center p-1 border bg-white text-black rounded-md"
      />
    </form>
  );
};

export default WorldDictionaryForm;
