import React from "react";
import Layout from "./Layout";
import MetaSEO from "./MetaSEO";
import { HOME_SEO } from "@/modules/home/lib/constant";
import { FaChevronCircleLeft, FaDesktop } from "react-icons/fa";
import Button from "./Button";

const UseBiggerScreen = () => {
  return (
    <Layout>
      <MetaSEO seo={HOME_SEO} />
      <div className="bg-white p-2 h-screen text-black">
        <div className="text-center text-3xl font-semibold mb-4">
          Content Not Available
        </div>
        <FaDesktop className="mx-auto text-9xl" />
        <div className="text-center text-xl">
          Please use PC or Laptop Screen to View this Page
        </div>

        <Button
          type="button"
          wrapperClassName="w-fit bg-blue-900 text-white p-2 mx-auto rounded mt-4 text-lg"
          buttonClassName="w-full h-full flex items-center gap-2"
          onClick={() => history.back()}
        >
          <FaChevronCircleLeft />
          <span>Go Back</span>
        </Button>
      </div>
    </Layout>
  );
};

export default UseBiggerScreen;
