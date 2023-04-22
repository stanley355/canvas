import React, { useState } from "react";
import Layout from "@/common/components/Layout";
import WorldDictionaryForm from "@/modules/worldDictionary/components/WorldDictionaryForm";

const WorldDictionary = () => {
  const [targetWord, setTargetWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");

  const handleWordMeaning = (word: string, meaning: string) => {
    setTargetWord(word);
    setWordMeaning(meaning);
  };

  return (
    <Layout>
      <div className="container mx-auto px-2 h-screen">
        <h1 className="my-4 text-3xl text-center font-semibold">
          World Dictionary
        </h1>
        <div className="text-xl text-center">
          Find Word Definition, not just in English but in All Languages
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <WorldDictionaryForm dispatchWordMeaning={handleWordMeaning} />
          <div className="text-lg lg:mt-8">
            <div className="font-bold">
              {targetWord ? targetWord : "Your result will show here :"}
            </div>
            {wordMeaning && <div>{wordMeaning}</div>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorldDictionary;
