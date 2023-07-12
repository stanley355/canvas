import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

import Button from "@/common/components/Button";
import SourceTextArea from "@/common/components/SourceTextArea";

import { CHECKBOT_OPTIONS } from "../lib/constant";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { hasFreeTrial } from "@/common/lib/hasFreeTrial";
import { handlePrompt } from "@/common/lib/handlePrompt";
import { saveUserPrompt } from "@/common/lib/saveUserPrompt";
import { createRemovedAndAddedDiff } from "../lib/createRemovedAndAddedDiff";
import { saveHistory } from "@/common/lib/saveHistory";

interface ICheckBotForm {
  sourceText: string;
  updateState: (name: string, val: any) => void;
}

const CheckBotForm = (props: ICheckBotForm) => {
  const { sourceText, updateState } = props;

  const isDesktop = useDesktopScreen();
  const [showPersonalInstruction, setShowPersonalInstruction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckbotOption = (option: any) => {
    const isPersonalInstruction = option.value === "personal_instruction";
    setShowPersonalInstruction(isPersonalInstruction);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const freeTrial = hasFreeTrial();
    if (!freeTrial) {
      updateState("showLogin", true);
      sendFirebaseEvent("login_popup", {});
      return;
    }

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

    const prompt = personalInstruction
      ? `${personalInstruction}, text: "${sourceText}"`
      : `${instruction}: "${sourceText}"`;
    const { content, prompt_tokens, completion_tokens } =
      await handlePrompt(prompt);

    if (content) {
      updateState("checkbotCompletion", content);

      const { removedDiff, addedDiff } = createRemovedAndAddedDiff(sourceText, content);
      updateState("checkbotRemoved", removedDiff);
      updateState("checkbotAdded", addedDiff);

      if (!isDesktop) window.location.href = "#checkbot_form";
      setIsLoading(false);

      const saveUserPromptPayload = {
        prompt_token: prompt_tokens,
        completion_token: completion_tokens,
        prompt_text: prompt,
        completion_text: content,
      };
      await saveUserPrompt(saveUserPromptPayload);

      const historyPayload = {
        time: new Date(),
        instruction: personalInstruction ? personalInstruction : instruction,
        originalText: sourceText,
        completionText: content,
        type: "checkbot",
      };
      saveHistory(historyPayload);
      return;
    }

    toast.error("Something went wrong, please try again");
    setIsLoading(false);
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="instruction_select">
        <Select
          placeholder="What can I help you with?"
          name="instruction"
          options={CHECKBOT_OPTIONS}
          className="w-full text-black mb-2"
          id="instruction_select"
          aria-label="instruction_select"
          aria-labelledby="instruction_select"
          onChange={handleCheckbotOption}
          styles={{
            control: (defaults: any) => ({
              ...defaults,
              border: "1px solid gray",
            }),
            placeholder: (defaults: any) => ({
              ...defaults,
              color: "black",
            }),
          }}
        />
      </label>
      {showPersonalInstruction && (
        <input
          type="text"
          name="personal_instruction"
          className="w-full mb-2 p-2 rounded-sm text-black bg-white"
          placeholder="What's your instruction?"
        />
      )}
      <div className="bg-white rounded pb-1">
        <SourceTextArea sourceText={sourceText} />
        <Button
          type="submit"
          disabled={isLoading}
          wrapperClassName="w-1/3 bg-blue-900 ml-auto mr-1 text-white py-2 mttext-md rounded-md font-semibold text-center"
          buttonClassName="w-full"
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
      </div>
    </form>
  );
};

export default CheckBotForm;
