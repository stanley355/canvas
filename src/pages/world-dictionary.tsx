import React from "react";
import Layout from "@/common/components/Layout";
import WorldDictionaryForm from "@/modules/worldDictionary/WorldDictionaryForm";

const WorldDictionary = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2 h-screen">
        <h1 className="my-4 text-3xl text-center font-semibold">
          World Dictionary
        </h1>
        <div className="text-xl text-center">
          Find Word Definition, not just in English but in All Languages
        </div>
        <WorldDictionaryForm />
      </div>
    </Layout>
  );
};

export default WorldDictionary;
