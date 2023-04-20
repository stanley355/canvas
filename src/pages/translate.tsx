import React from "react";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import Layout from "@/common/components/Layout";

const LangTranslate = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2">
      <h1 className="py-2 text-3xl">AI Translate (+Context) </h1>
        <TranslateForm />
      </div>
    </Layout>
  );
};

export default LangTranslate;
