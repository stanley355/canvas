import React, { FormEvent, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import Button from "@/common/components/Button";
import PremiumSourceTextArea from "./PremiumSourceTextArea";
import { handlePremiumPrompt } from "../lib/handlePremiumPrompt";
import { PREMIUM_CHECKBOT_OPTIONS } from "../lib/constant";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { reactSelectDarkStyle } from "@/common/lib/reactSelectDarkStyle";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { saveUserPremiumPrompt } from "@/common/lib/saveUserPremiumPrompt";

interface IPremiumCheckBotForm {
  dispatchCheckbotVal: (val: string) => void;
  dispatchTokenUsed: (token: number) => void;
}

const PremiumCheckBotForm = (props: IPremiumCheckBotForm) => {
  const { dispatchCheckbotVal, dispatchTokenUsed } = props;
  const [showPersonalInstruction, setShowPersonalInstruction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isDesktop = useDesktopScreen();

  const handleCheckbotOption = (option: any) => {
    const isPersonalInstruction = option.value === "personal_instruction";
    setShowPersonalInstruction(isPersonalInstruction);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as any;
    const instruction = target.instruction.value;
    const personalInstruction = target?.personal_instruction?.value;
    const sourceText = target.source_text.value;

    if (!instruction) {
      toast.warning("Please choose the instruction");
      return;
    }

    if (instruction === "personal_instruction" && !personalInstruction) {
      toast.warning("Personal Instruction could not be empty");
      return;
    }

    if (!sourceText) {
      toast.warning("Text could not be empty");
      return;
    }

    setIsLoading(true);
    sendFirebaseEvent("checkbot", {
      name: "checkbot",
      instruction: instruction,
    });

    const prompt = personalInstruction ? `${personalInstruction}, text: "${sourceText}"` : `${instruction} "${sourceText}"`;
    const langAICheck = await handlePremiumPrompt(prompt);

    if (langAICheck.content) {
      const totalToken = langAICheck.prompt_tokens + langAICheck.completion_tokens;
      const saveUserPromptPayload = {
        prompt_token: langAICheck.prompt_tokens,
        completion_token: langAICheck.completion_tokens,
        prompt_text: prompt,
        completion_text: langAICheck.content,
      };

      await saveUserPremiumPrompt(saveUserPromptPayload);

      dispatchTokenUsed(totalToken);
      dispatchCheckbotVal(langAICheck.content)

      if (!isDesktop) window.location.href = "#translate_result_textarea";
      setIsLoading(false);
      return;
    }

    if (!isDesktop) window.location.href = "#checkbot_result_textarea";
    setIsLoading(false);
    return "";
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <label htmlFor="checkbot_instruction_select">
        <Select
          placeholder="Instruction"
          name="instruction"
          options={PREMIUM_CHECKBOT_OPTIONS}
          className="w-full text-black mb-4"
          id="checkbot_instruction_select"
          aria-label="checkbot_instruction_select"
          aria-labelledby="checkbot_instruction_select"
          onChange={handleCheckbotOption}
          styles={reactSelectDarkStyle}
        />
      </label>
      {showPersonalInstruction && (
        <label htmlFor="personal_instruction">
          <input
            type="text"
            name="personal_instruction"
            className="w-full mb-2 border p-2 rounded-md text-white bg-black"
            placeholder="What's your instruction?"
          />
        </label>
      )}
      <PremiumSourceTextArea />
      <Button
        type="submit"
        disabled={isLoading}
        wrapperClassName="w-full"
        buttonClassName="w-full bg-black text-white py-2 text-md rounded-md font-semibold text-center hover:bg-gray-500"
      >
        {isLoading ? (
          <div className="flex flex row items-center justify-center">
            <span className="mr-2">Processing...</span>
            <FaSpinner className="animate-spin" />
          </div>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
};

export default PremiumCheckBotForm;
