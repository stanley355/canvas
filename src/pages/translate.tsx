import React, {useState} from "react";
import Layout from "@/common/components/Layout";
import TranslateForm from "@/modules/translate/components/TranslateForm";
import TranslateResult from "@/modules/translate/components/TranslateResult";

const LangTranslate = () => {
  const [translateVal, setTranslateVal] = useState("");

  return (
    <Layout>
      <div className="container mx-auto px-2">
        <h1 className="py-2 text-3xl" id="title">AI Translate (+Context) </h1>
        <TranslateForm dispatchTranslateVal={(val) => setTranslateVal(val)} />
        <TranslateResult translateVal={translateVal} />
      </div>
    </Layout>
  );
};

export default LangTranslate;
