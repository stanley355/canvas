import React from "react";
import Image from "next/image";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

interface INewsModal {
  onCloseClick: () => void;
}

const NewsModal = (props: INewsModal) => {
  const { onCloseClick } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50">
      <div className="mt-[40%] lg:mt-[15%] w-fit bg-white mx-auto p-2 rounded">
        <div className="text-black text-center text-2xl mb-2 font-semibold">
          {" "}
          NEW FEATURE!{" "}
        </div>
        <div className="flex items-center justify-between gap-2">
          <Image
            src="/images/news/text_toggle.png"
            alt="text translate"
            width={150}
            height={150}
            className="rounded"
          />
          <FaArrowRight className="text-black text-xl" />
          <Image
            src="/images/news/img_toggle.png"
            alt="image translate"
            width={150}
            height={150}
            className="rounded"
          />
        </div>
        <div className="text-black my-4 text-center">
          You can now scan and TRANSLATE IMAGE directly!
        </div>
        <Button
          type="button"
          title="ok"
          wrapperClassName="w-full bg-black p-2 rounded"
          buttonClassName="w-full"
          onClick={onCloseClick}
        />
      </div>
    </div>
  );
};

export default NewsModal;
