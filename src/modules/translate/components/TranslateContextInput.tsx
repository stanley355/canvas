import React from "react";
import { useTranslate } from "../lib/useTranslate";

const TranslateContextInput = () => {
  const {dispatch } = useTranslate();
  
  return (
    <label htmlFor="context">
      <input
        id="context_input"
        name="context"
        className="w-full rounded p-2 mb-2 bg-white text-black border border-gray-500"
        placeholder="Konteks (opsional) "
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "SET",
            name: "translateContext",
            value: e.target.value,
          })
        }
      />
    </label>
  );
};

export default TranslateContextInput;
