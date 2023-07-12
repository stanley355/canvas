import React from 'react';
import { ICheckbotArea } from '@/modules/checkbot/components/CheckbotArea';
import PremiumCheckBotForm from './CheckbotForm';
import CheckbotResultToggle from '@/modules/checkbot/components/CheckbotResultToggle';
import CheckboxResult from '@/modules/checkbot/components/CheckbotResult'; 

const PremiumCheckbotArea = (props: ICheckbotArea) => {
  const { states, updateState } = props;
  const {
    originalText,
    resultFormat,
    checkbotCompletion,
    checkbotRemoved,
    checkbotAdded,
  } = states;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-8">
      <PremiumCheckBotForm sourceText={originalText} updateState={updateState} />
      <div>
        {checkbotCompletion &&
          checkbotRemoved.length > 0 &&
          checkbotAdded.length > 0 && (
            <CheckbotResultToggle
              resultFormat={resultFormat}
              updateState={updateState}
            />
          )}
        {!resultFormat && (
          <CheckboxResult checkbotVal={checkbotCompletion} />
        )}
        {resultFormat && (
          <>
            <div className="border border-gray-500 h-80 rounded-md p-2 overflow-auto bg-white">
              {resultFormat === "removed" && checkbotRemoved}
              {resultFormat === "added" && checkbotAdded}
            </div>
            <div className="text-white">*Go to No Diff to copy</div>
          </>
        )}
      </div>
    </div>
  )
};

export default PremiumCheckbotArea;