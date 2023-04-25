import React, { useState } from "react";
import Select from "react-select";
import { FaSpinner } from "react-icons/fa";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import Button from "@/common/components/Button";
import { CHECKBOT_OPTIONS } from "../constant";
import { LANGUAGE_LIST } from "../../translate/constant";
import { reactSelectDarkStyle } from "@/common/lib/reactSelect";
import { generateCheckbotPrompt } from "../lib/generateCheckbotPrompt";
import { fetchCheckbotAndDispatch } from "../lib/fetchCheckbotAndDispatch";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

interface ICheckBotForm {
  dispatchCheckbotVal: (val: string) => void;
}

const CheckBotForm = (props: ICheckBotForm) => {
  const { dispatchCheckbotVal } = props;
  const [showPersonalInstruction, setShowPersonalInstruction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isDesktop = useDesktopScreen();

  const handleCheckbotOption = (option: any) => {
    const isPersonalInstruction = option.value === "personal_instruction";
    setShowPersonalInstruction(isPersonalInstruction);
  };

  const handleSubmit = async (e: any) => {
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

    setIsLoading(true);
    sendFirebaseEvent("checkbot", {
      name: "checkbot",
      instruction: instruction,
    });
    if (instruction === "personal_instruction") {
      let personalInstruction = e.target.personal_instruction.value;
      if (!personalInstruction) {
        alert("You haven't filled the personal instruction");
        return "";
      }

      const prompt = generateCheckbotPrompt(
        personalInstruction,
        outputLanguage,
        targetText
      );
      await fetchCheckbotAndDispatch(prompt, dispatchCheckbotVal);
      if (!isDesktop) window.location.href = "#checkbot_result_textarea";
      setIsLoading(false);
      return "";
    }

    const prompt = generateCheckbotPrompt(
      instruction,
      outputLanguage,
      targetText
    );

    await fetchCheckbotAndDispatch(prompt, dispatchCheckbotVal);
    if (!isDesktop) window.location.href = "#checkbot_result_textarea";
    setIsLoading(false);
    return "";
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <label htmlFor="checkbot_instruction_select">
        <Select
          placeholder="What can I help you with?"
          name="instruction"
          options={CHECKBOT_OPTIONS}
          className="w-full text-black mb-4"
          id="checkbot_instruction_select"
          aria-label="checkbot_instruction_select"
          aria-labelledby="checkbot_instruction_select"
          onChange={handleCheckbotOption}
          styles={reactSelectDarkStyle}
        />
      </label>
      <label htmlFor="checkbot_language_select">
        <Select
          placeholder="Optional: Output Language"
          name="output_language"
          options={LANGUAGE_LIST}
          className="w-full text-black mb-2"
          id="checkbot_language_select"
          aria-label="checkbot_language_select"
          aria-labelledby="checkbot_language_select"
          styles={reactSelectDarkStyle}
        />
      </label>
      {showPersonalInstruction && (
        <input
          type="text"
          name="personal_instruction"
          className="w-full mb-2 bg-transparent border p-2 rounded-sm"
          placeholder="What's your instruction?"
        />
      )}
      <label htmlFor="target_text_textarea">
        <textarea
          name="target_text"
          id="target_text_textarea"
          aria-label="target_text_textarea"
          aria-labelledby="target_text_textarea"
          cols={30}
          rows={10}
          className="w-full bg-transparent text-white rounded-md border my-2 p-2"
          placeholder="Copy your text here (max 2000 words)"
        />
      </label>
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
          "Check"
        )}
      </Button>
    </form>
  );
};

export default CheckBotForm;
