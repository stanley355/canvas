import { useState } from "react";
import { GetStaticProps } from "next";
import { TbPhotoAi } from "react-icons/tb";
import Link from "next/link";

import ImageToTextInput from "@/modules/image-to-text/components/ImageToTextInput";
import ImageToTextResult from "@/modules/image-to-text/components/ImageToTextResult";
import { fetchDatoCms } from "@/common/lib/api/fetchDatoCms";
import { getPagesSchema } from "@/common/lib/api/gql";
import MetaHead, { IMetaHead } from "@/common/components/MetaHead";

interface IImageToText {
  datoCmsData: IMetaHead;
}

const ImageToText = (props: IImageToText) => {
  const { datoCmsData } = props;
  const [recognizedText, setRecognizedText] = useState("");

  return (
    <div className="container px-0 pb-8 mx-auto mt-16 lg:mt-4 lg:px-4">
      <MetaHead pagesSchema={datoCmsData.pagesSchema} />
      <div className="flex items-center gap-1 px-3 py-1 ml-4 text-blue-800 bg-blue-100 border border-gray-300 rounded-md w-fit">
        <TbPhotoAi className="text-xl" />
        <span>Image to Text</span>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-8">
        <ImageToTextInput
          dispatchRecognizedText={setRecognizedText}
          recognizedText={recognizedText}
        />
        <ImageToTextResult recognizedText={recognizedText} />
      </div>

      <div className="flex items-center justify-center gap-2 mt-16">
        <span>Found an Issue ? </span>
        <Link
          className="text-blue-500 border-b border-b-blue-500"
          href={"/support"}
        >
          Report
        </Link>
      </div>
    </div>
  );
};

export default ImageToText;
export const getStaticProps: GetStaticProps = async () => {
  const datoCmsData = await fetchDatoCms(getPagesSchema, {
    slug: "image-to-text",
  });

  return {
    props: {
      datoCmsData,
    },
  };
};
