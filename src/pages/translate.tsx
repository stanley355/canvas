import React from "react";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import Layout from "@/common/components/Layout";

const LangTranslate = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2">
        <TranslateForm />
      </div>
    </Layout>
  );
};

export default LangTranslate;
