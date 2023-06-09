import React from "react";
import Select from "react-select";
import { reactSelectDarkStyle } from "../lib/reactSelectDarkStyle";
import { FaImage, FaLanguage } from "react-icons/fa";
import classNames from "classnames";

interface IMediaSelect {
  onChange: (option: any) => void;
}

const MediaSelect = (props: IMediaSelect) => {
  const { onChange } = props;

  const Placeholder = () => (
    <div className="flex items-center gap-2 ">
      <FaLanguage className="text-xl" />
      <span>Text Translate</span>
    </div>
  );

  const MEDIA_OPTIONS = [
    {
      label: (
        <div className="flex items-center gap-2">
          <FaLanguage className="text-xl" />
          <span>Text Translate</span>
        </div>
      ),
      value: "text",
    },
    {
      label: (
        <div className="flex items-center gap-2">
          <FaImage className="text-xl" />
          <span>Image Translate</span>
        </div>
      ),
      value: "image",
    },
  ];

  return (
    <label htmlFor="media_type">
      <Select
        name="media_type"
        className="text-black"
        placeholder={<Placeholder />}
        options={MEDIA_OPTIONS}
        onChange={onChange}
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

export default MediaSelect;
