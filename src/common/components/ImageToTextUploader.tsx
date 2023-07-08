import React, { useState } from "react";
import Select from "react-select";
import { FaCloudUploadAlt, FaSpinner } from "react-icons/fa";
import Tesseract from "tesseract.js";
import { TESSERACT_LANGUAGE_LIST } from "@/modules/translate/lib/constant";
import { toast } from "react-toastify";
import classNames from "classnames";

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
      <div
        className="font-semibold mb-2 px-1 text-black"
        
      >
        * For better result, put the Language of the text in Image (automatic as
        English)
      </div>
      <Select
        placeholder="Select Image Language"
        options={TESSERACT_LANGUAGE_LIST}
        className="mb-2"
        onChange={(opt: any) => setLang(opt.value)}
        styles={{
          control: (defaults: any) => ({
            ...defaults,
            border: "1px solid gray"
          }),
          placeholder: (defaults: any) => ({
            ...defaults,
            color: "black",
          })
        }}
      />
      <div
        className="rounded h-60 lg:h-64 bg-white text-black"
      >
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <FaSpinner className="animate-spin text-4xl" />
          <span className="mr-2">Processing Image</span>
        </div>
      ) : (
        <label
          htmlFor="image_input"
          className="cursor-pointer w-full h-full flex flex-col items-center justify-center border border-gray-500"
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
    </div >
  );
};

export default ImageToTextUploader;
