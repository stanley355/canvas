import React from "react";
import { useCheckbot } from "../lib/useCheckbot";

const CheckbotPersonalInstructionInput = () => {
  const { dispatch } = useCheckbot();
  return (
    <label htmlFor="checkbot_personal_instruction">
      <input
        type="text"
        name="checkbot_personal_instruction"
        className="w-full mb-2 p-2 border border-gray-500 rounded-md text-black"
        placeholder="What's your instruction?"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: "SET",
            name: "checkbotPersonalInstruction",
            value: e.target.value,
          });
        }}
      />
    </label>
  );
};

export default CheckbotPersonalInstructionInput;
