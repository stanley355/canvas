import React from "react";
import Select from "react-select";
import { FaAngleDoubleRight } from "react-icons/fa";
import Button from "@/common/components/Button";
import Layout from "@/common/components/Layout";

const LangTranslate = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2">
        <div className="flex flex-row items-center justify-center w-full py-2">
          <Select className="w-5/12" placeholder="Select Lang" />
          <FaAngleDoubleRight className="w-2/12" />
          <Select className="w-5/12" placeholder="Select Lang" />
        </div>
        <form onSubmit={() => {}}>
            <div className="lg:flex lg:flex-row lg:gap-2 lg:mb-2">

          <textarea
            name="ori_lang_text"
            id="ori_lang_textarea"
            cols={30}
            rows={10}
            className="w-full border rounded-md bg-transparent p-2"
            placeholder="..."
          />
          <textarea
            name="target_lang_text"
            id="target_lang_textarea"
            cols={30}
            rows={10}
            className="w-full border rounded-md bg-transparent p-2"
            placeholder="..."
          />
            </div>
          <Button
            type="submit"
            title="Submit"
            buttonClassName="w-full bg-white text-black py-2 text-md rounded-md font-semibold text-center hover:border hover:border-white hover:bg-black hover:text-white"
          />
        </form>
      </div>
    </Layout>
  );
};

export default LangTranslate;
