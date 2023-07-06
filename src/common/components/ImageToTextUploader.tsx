import React, { useState } from "react";
import Select from "react-select";
import { FaCloudUploadAlt, FaSpinner } from "react-icons/fa";
import Tesseract from "tesseract.js";
import { TESSERACT_LANGUAGE_LIST } from "@/modules/translate/constant";
import { reactSelectDarkStyle } from "../lib/reactSelectDarkStyle";
import { toast } from "react-toastify";

interface IImageToTextUploader {
  dispatch: (val: string) => void;
}

const ImageToTextUploader = (props: IImageToTextUploader) => {
  const { dispatch } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [lang, setLang] = useState("eng");

  const onChange = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    Tesseract.recognize(e.target.files[0], lang)
      .then(({ data }) => {
        setIsLoading(false);
        dispatch(data.text);
      })
      .catch((_) => {
        toast.error("Something went wrong, please try again.");
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="text-black font-semibold mb-2 px-1">
        * For better result, put the Language of the text in Image (automatic as
        English)
      </div>
      <Select
        placeholder="Select Image Language"
        options={TESSERACT_LANGUAGE_LIST}
        styles={reactSelectDarkStyle}
        className="mb-1"
        onChange={(opt: any) => setLang(opt.value)}
      />
      <div className="bg-black rounded h-60 lg:h-64">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <FaSpinner className="animate-spin text-4xl" />
            <span className="mr-2">Processing Image</span>
          </div>
        ) : (
          <label
            htmlFor="image_input"
            className="text-white cursor-pointer w-full h-full flex flex-col items-center justify-center"
          >
            <input
              type="file"
              name="image_input"
              id="image_input"
              hidden
              size={60}
              accept="image/png, image/jpeg, image/jpg"
              onChange={onChange}
              disabled={false}
            />
            <FaCloudUploadAlt className="text-5xl" />
            <div className="font-semibold text-xl">Upload your Image</div>
            <div className="font-semibold text-lg">(.png, .jpeg, .jpg)</div>
          </label>
        )}
      </div>
    </div>
  );
};

export default ImageToTextUploader;
