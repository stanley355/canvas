import React, { useState } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import Select from "react-select";
import Button from "@/common/components/Button";
import { WORLD_DICTIONARY_ADDITION } from "../constant";
import { LANGUAGE_LIST } from "../../translate/constant";

const WorldDictionaryForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async  (e:any) => {
    e.preventDefault();

    const dictionaryAdditions: any[] = e.target.dictionary_addition;
    // console.log(dictionaryAdditions[0].value);
    // setIsLoading(true)
  }

  return (
    <form onSubmit={handleSubmit} className="my-8 lg:w-1/2 lg:mx-auto">
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
      <div className="lg:grid lg:grid-cols-2 lg:gap-2">

      <Select
        placeholder="Any additional topping? (You can choose more than one)"
        options={WORLD_DICTIONARY_ADDITION}
        className="text-black mb-4 bg-black"
        name="dictionary_addition"
        isMulti
        onChange={(option) => console.log(option)}
      />
      <Select
        placeholder="Optional: Explanation Language"
        options={LANGUAGE_LIST}
        className="text-black mb-4"
      />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        wrapperClassName="w-full lg:w-2/3 lg:mx-auto"
        buttonClassName="w-full bg-white text-black py-2 text-md rounded-md font-semibold text-center hover:border hover:border-white hover:bg-black hover:text-white"
      >
        {isLoading ? (
          <div className="flex flex row items-center justify-center">
            <span className="mr-2">Processing</span>
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default WorldDictionaryForm;
