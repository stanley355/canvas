import React from "react";
import Layout from "@/common/components/Layout";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";

const LangTranslate = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2">
        <h1 className="py-2 text-3xl">AI Translate (+Context) </h1>
        <TranslateForm />
        <TranslateResult />
      </div>
    </Layout>
  );
};

export default LangTranslate;
