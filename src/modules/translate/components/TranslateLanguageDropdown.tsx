import React from "react";
import Select from "react-select";
import { TRANSLATE_LANGUAGE_LIST } from "../lib/translateLanguageList";
import { useTranslate } from "../lib/useTranslate";

const TranslateLanguageDropdown = () => {
  const { dispatch } = useTranslate();

  const dropdownStyling = {
    control: (defaults: any) => ({
      ...defaults,
      border: "1px solid gray",
    }),
    placeholder: (defaults: any) => ({
      ...defaults,
      color: "black",
    }),
  };

  return (
    <label htmlFor="translate_language" className="w-full mb-4">
      <Select
        className="text-black mb-2"
        placeholder="Pilih bahasa tujuan"
        id="translate_language_select"
        name="translate_language"
        aria-label="translate_lang_select"
        aria-labelledby="translate_lang_select"
        options={TRANSLATE_LANGUAGE_LIST}
        styles={dropdownStyling}
        onChange={(option) => {
          dispatch({
            type: "SET",
            name: "translateLanguage",
            value: option,
          });
        }}
      />
    </label>
  );
};

export default TranslateLanguageDropdown;
