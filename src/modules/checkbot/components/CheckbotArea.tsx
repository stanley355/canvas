import React from 'react';
import CheckBotForm from './CheckbotForm';
import CheckbotResultToggle from './CheckbotResultToggle';
import CheckboxResult from './CheckbotResult';

interface ICheckbotArea {
  states: {
    originalText: string,
    resultFormat: string,
    checkbotCompletion: string,
    checkbotRemoved: Array<any>,
    checkbotAdded: Array<any>,
  };
  updateState: (name: string, val: any) => void;
}

const CheckbotArea = (props: ICheckbotArea) => {
  const { states, updateState } = props;
  const {
    originalText,
    resultFormat,
    checkbotCompletion,
    checkbotRemoved,
    checkbotAdded,
  } = states;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 mb-8">
      <CheckBotForm sourceText={originalText} updateState={updateState} />
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
        {resultFormat === "removed" && (
          <div className="border border-gray-500 h-80 rounded-md p-2 overflow-y-scroll bg-white">
            {checkbotRemoved}
          </div>
        )}
        {resultFormat === "added" && (
          <div className="border border-gray-500 h-80 rounded-md p-2 overflow-y-scroll bg-white">
            {checkbotAdded}
          </div>
        )}
        {resultFormat && (
          <div className="text-white">*Go to No Diff to copy</div>
        )}
      </div>
    </div>
  )
};

export default CheckbotArea;