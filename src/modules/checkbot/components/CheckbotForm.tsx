import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { FaSpinner } from "react-icons/fa";
import Button from "@/common/components/Button";
import { CHECKBOT_OPTIONS } from "../constant";
import { LANGUAGE_LIST } from "../../translate/constant";

interface ICheckBotForm {
  dispatchCheckbotVal: (val: string) => void;
}

const CheckBotForm = (props: ICheckBotForm) => {
  const { dispatchCheckbotVal } = props;
  const [showPersonalInstruction, setShowPersonalInstruction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckbotOption = (option: any) => {
    if (option.value === "personal_instruction") {
      setShowPersonalInstruction(true);
    } else {
      setShowPersonalInstruction(false);
    }
  };

  const fetchAPIandDispatch = async (reqData: any) => {
    const URL = `${process.env.NEXT_PUBLIC_BASE_URL}api/ai/chat-completion/`;
    const { data } = await axios.post(URL, reqData);
    if (data && data.choices.length > 0) {
      const content = data.choices[0].message.content;
      dispatchCheckbotVal(content);
      // if (!isDesktop) window.location.href = "#translate_result_textarea";
    } else {
      alert("Something went wrong, please try again!");
      return "";
    }
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
    if (instruction && instruction === "personal_instruction") {
      let personalInstruction = e.target.personal_instruction.value;
      if (!personalInstruction) {
        alert("You haven't filled the personal instruction");
        return "";
      }

      if (outputLanguage) {
        personalInstruction + " " + `in ${outputLanguage}`;
      }

      const reqData = {
        message: `${personalInstruction}, text: "${targetText}"`,
      };

      await fetchAPIandDispatch(reqData);
      setIsLoading(false);
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
