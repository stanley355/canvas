import React from "react";
import { useCheckbot } from "../lib/useCheckbot";
import CheckbotClearBtn from "./CheckbotClearBtn";
import CheckbotSubmitBtn from "./CheckbotSubmitBtn";

const CheckbotTextInput = () => {
  const { checkbotStates, dispatch } = useCheckbot();
  const { checkbotText } = checkbotStates;

  return (
    <div className="w-full relative">
      <CheckbotClearBtn />
      <label htmlFor="checkbot_text">
        <textarea
          name="checkbot_text"
          id="checkbot_textarea"
          cols={30}
          rows={10}
          className="w-full h-full bg-white resize-none p-2 rounded border border-black text-black focus:outline-none "
          placeholder="Masukkan teks Anda di sini"
          value={checkbotText}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>{
            dispatch({
              type: "SET",
              name: "checkbotText",
              value: e.target.value,
            })}
          }
        />
      </label>
      <CheckbotSubmitBtn />
    </div>
  );
};

export default CheckbotTextInput;
