import React from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import Button from "@/common/components/Button";
import { WORLD_DICTIONARY_ADDITION } from "./constant";
import { LANGUAGE_LIST } from "../translate/constant";

const WorldDictionaryForm = () => {
  return (
    <form onSubmit={() => {}} className="my-8">
      <div className="flex flex-row items-center border border-white rounded-md mb-4">
        <FaSearch className="text-2xl m-2" />
        <input
          type="text"
          name="search_text"
          id="search_text_input"
          placeholder="Just give me any word"
          className="w-full bg-transparent border-l border-white p-2"
        />
      </div>
      <Select
        placeholder="Any additional topping? (You can choose more than one)"
        options={WORLD_DICTIONARY_ADDITION}
        className="text-black mb-4 bg-black"
        isMulti
        onChange={(option) => console.log(option)}
      />
      <Select
        placeholder="Optional: Output Language"
        options={LANGUAGE_LIST}
        className="text-black"
      />
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
