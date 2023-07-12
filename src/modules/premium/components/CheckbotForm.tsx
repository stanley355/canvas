import React, { useState } from "react";
import dynamic from "next/dynamic";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import Cookies from "js-cookie";
import Button from "@/common/components/Button";
import PremiumSourceTextArea from "./PremiumSourceTextArea";
import { handlePremiumPrompt } from "../lib/handlePremiumPrompt";
import { PREMIUM_CHECKBOT_OPTIONS } from "../lib/constant";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";
import { reactSelectDarkStyle } from "@/common/lib/reactSelectDarkStyle";
import { saveUserPremiumPrompt } from "@/common/lib/saveUserPremiumPrompt";
import { checkUserCurrentBalance } from "../lib/checkUserCurrentBalance";
import SourceTextArea from "@/common/components/SourceTextArea";
import { diffChars } from "diff";
import { useDesktopScreen } from "@/common/hooks/useDesktopScreen";
import { saveHistory } from "@/common/lib/saveHistory";
import { decode } from "jsonwebtoken";

interface IPremiumCheckBotForm {
  sourceText: string;
  updateState: (name: string, value: any) => void;
}

const PremiumCheckBotForm = (props: IPremiumCheckBotForm) => {
  const { sourceText, updateState } = props;

  const isDesktop = useDesktopScreen();

  const [showPersonalInstruction, setShowPersonalInstruction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const InsufficientBalanceModal = dynamic(
    () => import("./InsufficientBalanceModal")
  );

  const handleCheckbotOption = (option: any) => {
    const isPersonalInstruction = option.value === "personal_instruction";
    setShowPersonalInstruction(isPersonalInstruction);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = Cookies.get("token");
    if (!token) {
      updateState("showLogin", true);
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
    const hasBalance = await checkUserCurrentBalance();
    if (!hasBalance) {
      setShowModal(true);
      setIsLoading(false);
      return;
    }

    sendFirebaseEvent("premium_checkbot", {
      name: "premium_checkbot",
      instruction: instruction,
    });

    const prompt = personalInstruction
      ? `${personalInstruction}, text: "${sourceText}"`
      : `${instruction}: "${sourceText}"`;
    const { content, prompt_tokens, completion_tokens } =
      await handlePremiumPrompt(prompt);

    if (content) {
      updateState("checkbotCompletion", content);

      const diff = diffChars(sourceText, content);
      const removedDiff = diff
        .filter((d) => !d.added)
        .map((d, i) => (
          <span key={i} className={d.removed ? "text-red-500" : "text-black"}>
            {d.value}
          </span>
        ));
      const addedDiff = diff
        .filter((d) => !d.removed)
        .map((d, i) => (
          <span key={i} className={d.added ? "text-green-700" : "text-black"}>
            {d.value}
          </span>
        ));
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
      await saveUserPremiumPrompt(saveUserPromptPayload);
      return;
    }

    toast.error("Something went wrong, please try again");
    setIsLoading(false);
    return "";
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 lg:mb-0">
      {showModal && (
        <InsufficientBalanceModal onCloseClick={() => setShowModal(false)} />
      )}
      <label htmlFor="instruction_select">
        <Select
          placeholder="Instruction"
          name="instruction"
          options={PREMIUM_CHECKBOT_OPTIONS}
          className="w-full text-black mb-2 border-black"
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
        <label htmlFor="personal_instruction">
          <input
            type="text"
            name="personal_instruction"
            className="w-full mb-2 border border-gray-500 p-2 rounded text-black"
            placeholder="What's your instruction?"
          />
        </label>
      )}
      <div className="bg-white border border-gray-500 rounded-md pb-2 relative">
        <SourceTextArea sourceText={sourceText} />
        <Button
          type="submit"
          disabled={isLoading}
          wrapperClassName="w-1/3 bg-blue-900 ml-auto mr-1 text-white py-2 rounded-md font-semibold text-center"
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

export default PremiumCheckBotForm;
