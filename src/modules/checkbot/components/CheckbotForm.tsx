import React, { useState } from "react";
import Select from "react-select";
import { FaSpinner } from "react-icons/fa";
import Button from "@/common/components/Button";
import { CHECKBOT_OPTIONS } from "../constant";
import { LANGUAGE_LIST } from "../../translate/constant";

const CheckBotForm = () => {
  const [showPersonalInstruction, setShowPersonalInstruction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckbotOption = (option: any) => {
    if (option.value === "personal_instruction") {
      setShowPersonalInstruction(true);
    } else {
      setShowPersonalInstruction(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const instruction = e.target.instruction.value;
    const outputLanguage = e.target.output_language.value;
    const targetText = e.target.target_text.value;

    if (!instruction) {
      alert("You haven't chosen the instruction");
      return "";
    }

    if (!targetText) {
      alert("Text could not be empty");
      return "";
    }

    if (instruction && instruction === "personal_instruction") {
      const personalInstruction = e.target.personal_instruction.value;
      if (!personalInstruction) {
        alert("You haven't filled the personal instruction");
        return "";
      }
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Select
        placeholder="What can I help you with?"
        name="instruction"
        options={CHECKBOT_OPTIONS}
        className="w-full text-black mb-2"
        onChange={handleCheckbotOption}
      />
      <Select
        placeholder="Output Lang (Default: English)"
        name="output_language"
        options={LANGUAGE_LIST}
        className="w-full text-black mb-2"
      />
      {showPersonalInstruction && (
        <input
          type="text"
          name="personal_instruction"
          className="w-full mb-2 bg-transparent border p-2 rounded-sm"
          placeholder="What's your instruction?"
        />
      )}
      <textarea
        name="target_text"
        id="target_text_textarea"
        cols={30}
        rows={10}
        className="w-full bg-transparent text-white rounded-sm border my-2 p-2"
        placeholder="Copy your text here"
      />
      <Button
          type="submit"
          disabled={isLoading}
          wrapperClassName="w-full"
          buttonClassName="w-full bg-white text-black py-2 text-md rounded-md font-semibold text-center hover:border hover:border-white hover:bg-black hover:text-white"
        >
          {isLoading ? (
            <div className="flex flex row items-center justify-center">
              <span className="mr-2">Processing</span>
              <FaSpinner className="animate-spin" />
            </div>
          ) : (
            "Submit"
          )}
        </Button>
    </form>
  );
};

export default CheckBotForm;
