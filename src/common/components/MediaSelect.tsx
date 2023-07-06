import React from "react";
import Select from "react-select";
import { reactSelectDarkStyle } from "../lib/reactSelectDarkStyle";
import { FaImage, FaLanguage } from "react-icons/fa";
import classNames from "classnames";

interface IMediaSelect {
  style: "dark" | "white";
  onChange: (option: any) => void;
}

const MediaSelect = (props: IMediaSelect) => {
  const { onChange, style } = props;

  const Placeholder = () => (
    <div className={classNames("flex items-center gap-2", style === "white" ? "text-black" : "")}>
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
        placeholder={<Placeholder />}
        options={MEDIA_OPTIONS}
        styles={style === "dark" ? reactSelectDarkStyle : {}}
        className={style === "white" ? "text-black" : ""}
        onChange={onChange}
      />
    </label>
  );
};

export default MediaSelect;
