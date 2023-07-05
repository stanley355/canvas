import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { CHECKBOT_OPTIONS } from "../constant";
import Button from "@/common/components/Button";
import SourceTextArea from "@/common/components/SourceTextArea";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { hasFreeTrial } from "@/common/lib/hasFreeTrial";
import { handlePrompt } from "@/common/lib/handlePrompt";
import { saveUserPrompt } from "@/common/lib/saveUserPrompt";

interface ICheckBotForm {
  dispatchLoginForm: () => void;
  dispatchCheckbotVal: (val: string) => void;
}

const CheckBotForm = (props: ICheckBotForm) => {
  const { dispatchLoginForm, dispatchCheckbotVal } = props;
  const [showPersonalInstruction, setShowPersonalInstruction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isDesktop = useDesktopScreen();

  const handleCheckbotOption = (option: any) => {
    const isPersonalInstruction = option.value === "personal_instruction";
    setShowPersonalInstruction(isPersonalInstruction);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const freeTrial = hasFreeTrial();
    if (!freeTrial) {
      dispatchLoginForm();
      sendFirebaseEvent("login_popup", {});
      return;
    }

    const instruction = e.target.instruction.value;
    const sourceText = e.target.source_text.value;
    if (!instruction) {
      toast.warning("You haven't chosen the instruction");
      return; 
    }

    if (!sourceText) {
      toast.warning("Text could not be empty");
      return; 
    }


    const personalInstruction = e.target?.personal_instruction?.value;
    if (instruction === "personal_instruction" && !personalInstruction) {
      toast.warning("You haven't filled the personal instruction");
      return; 
    }

    setIsLoading(true);
    sendFirebaseEvent("checkbot", {
      name: "checkbot",
      instruction: instruction,
    });
    const prompt = `${personalInstruction ?? instruction} ${personalInstruction ? ", text: " : ""} ${sourceText}`;
    const { content, prompt_tokens, completion_tokens } = await handlePrompt(prompt);
    if (content) {
      setIsLoading(false);
      dispatchCheckbotVal(content);
      if (!isDesktop) window.location.href = "#translate_result_textarea";

      const saveUserPromptPayload = {
        prompt_token: prompt_tokens,
        completion_token: completion_tokens,
        prompt_text: prompt,
        completion_text: content,
        instruction: personalInstruction ?? instruction,
        instruction_type: "Checkbot",
        original_text: sourceText,
        is_save: false,
      };

      await saveUserPrompt(saveUserPromptPayload);
      return;
    }

    toast.error("Something went wrong, please try again");
    setIsLoading(false);
    return;
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
        />
      </label>
      {showPersonalInstruction && (
        <input
          type="text"
          name="personal_instruction"
          className="w-full mb-2 border p-2 rounded-sm text-black bg-white"
          placeholder="What's your instruction?"
        />
      )}
      <SourceTextArea />
      <Button
        type="submit"
        disabled={isLoading}
        wrapperClassName="w-full mt-4"
        buttonClassName="w-full bg-white text-black py-2 mttext-md rounded-md font-semibold text-center hover:border hover:border-white hover:bg-black hover:text-white"
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
