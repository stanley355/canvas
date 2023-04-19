import React from "react";
import Select from "react-select";
import { FaAngleDoubleRight } from "react-icons/fa";
import Layout from "@/common/components/Layout";

const LangTranslate = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2">
        <div className="flex flex-row items-center justify-center w-full py-2">
          <Select className="w-5/12" placeholder="Select Lang" />
          <FaAngleDoubleRight className="w-2/12"/>
          <Select className="w-5/12" placeholder="Select Lang" />
        </div>
      </div>
    </Layout>
  );
};

export default LangTranslate;
