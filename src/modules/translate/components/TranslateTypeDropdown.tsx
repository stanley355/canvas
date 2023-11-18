import React from "react";
import Select, { SingleValue } from "react-select";
import { useTranslate } from "../lib/useTranslate";
import TranslateTypePlaceholder from "./TranslateTypePlaceholder";
import { TRANSLATE_TYPE_OPTIONS } from "./TranslateTypeOptions";

interface IDropdownOption {
  label: React.JSX.Element;
  value: string;
}

const TranslateTypeDropdown = () => {
  const { dispatch } = useTranslate();

  return (
    <label htmlFor="translate_type">
      <Select
        name="translate_type"
        className="text-black"
        placeholder={<TranslateTypePlaceholder />}
        options={TRANSLATE_TYPE_OPTIONS}
        onChange={(option: SingleValue<IDropdownOption>) =>
          dispatch({
            type: "SET",
            name: "isImageTranslate",
            value: option?.value === "image",
          })
        }
        styles={{
          control: (defaults: any) => ({
            ...defaults,
            border: "1px solid gray",
          }),
          placeholder: (defaults: any) => ({
            ...defaults,
            color: "black",
          }),
        }}
      />
    </label>
  );
};

export default TranslateTypeDropdown;
