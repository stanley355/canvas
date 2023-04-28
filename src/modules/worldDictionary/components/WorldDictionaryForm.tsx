import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaSearch, FaSpinner } from "react-icons/fa";
import Select from "react-select";
import axios from "axios";
import Button from "@/common/components/Button";
import { WORLD_DICTIONARY_ADDITION } from "../constant";
import { LANGUAGE_LIST } from "../../translate/constant";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { reactSelectDarkStyle } from "@/common/lib/reactSelect";

interface IWorldDictionaryForm {
  dispatchWordMeaning: (word: string, meaning: string) => void;
}

const WorldDictionaryForm = (props: IWorldDictionaryForm) => {
  const { dispatchWordMeaning } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const targetWord = e.target.target_word.value;
    const dictionaryAddition = e.target.dictionary_addition;
    const sourceLanguage = e.target.source_language.value;
    const targetLanguage = e.target.target_language.value;

    if (!targetWord) {
      alert("Search Word can not be empty!");
      return "";
    }

    let baseMsg = `Give me the IPA and definition of ${targetWord} `;

    if (sourceLanguage) {
      baseMsg += `from ${sourceLanguage} `;
    }

    if (dictionaryAddition && dictionaryAddition?.length > 0) {
      dictionaryAddition.forEach((addition: any) => {
        baseMsg += `${addition.value}, `;
      });
    }

    if (targetLanguage) {
      baseMsg += `and explain it in ${targetLanguage}`;
    }

    const reqData = {
      message: baseMsg,
    };

    setIsLoading(true);
    sendFirebaseEvent("world_dictionary", {
      name: "world_dictionary",
      message: baseMsg,
    });
    const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;
    const { data } = await axios.post(URL, reqData);
    if (data && data.choices.length > 0) {
      const content = data.choices[0].message.content;
      dispatchWordMeaning(targetWord, content);
    } else {
      toast.error("Something went wrong, please try again!");
    }

    setIsLoading(false);
    return "";
  };

  return (
    <form onSubmit={handleSubmit} className="my-8">
      <div className="flex flex-row items-center border border-white rounded-md mb-4">
        <FaSearch className="text-2xl m-2" />
        <input
          type="text"
          name="target_word"
          id="target_word_input"
          placeholder="Just give me any word"
          className="w-full bg-transparent border-l border-white p-2"
        />
      </div>
      <Select
        placeholder="Optional: Source Language"
        options={LANGUAGE_LIST}
        name="source_language"
        className="text-black mb-4"
        styles={reactSelectDarkStyle}
      />
      <Select
        placeholder="Optional: Explanation Language"
        options={LANGUAGE_LIST}
        name="target_language"
        className="text-black mb-4"
        styles={reactSelectDarkStyle}
      />
      <Select
        placeholder="Any additional topping? (You can choose more than one)"
        options={WORLD_DICTIONARY_ADDITION}
        className="text-black mb-4 bg-black"
        name="dictionary_addition"
        styles={reactSelectDarkStyle}
        isMulti
      />
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
          "Check"
        )}
      </Button>
    </form>
  );
};

export default WorldDictionaryForm;
