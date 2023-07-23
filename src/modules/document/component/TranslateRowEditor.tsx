import React, { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { FaBuffer, FaCopy, FaLanguage, FaRegSave, FaSpinner, FaTimesCircle, FaTrash } from "react-icons/fa";

import Button from "@/common/components/Button";
import { IPrompt } from "@/pages/document/translate/[id]";
import { saveUserPrompt } from "@/common/lib/saveUserPrompt";
import { updatePrompt } from "@/common/lib/updatePrompt";
import { DOC_TRANSLATE_LANGUAGES } from "../lib/constant";

interface ITranslateRowEditor {
  index: number;
  prompt: IPrompt;
  dispatch: (val: any) => void;
  updateState: (name: string, val: any) => void;
}

const TranslateRowEditor = (props: ITranslateRowEditor) => {
  const { index, prompt, dispatch, updateState } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [targetLang, setTargetLang] = useState("");
  const [promptText, setPromptText] = useState(prompt.prompt_text);
  const [completionText, setCompletionText] = useState(prompt.completion_text);

  const onCloseClick = () => {
    updateState("targetRowIndex", 0);
    updateState("targetRowPrompt", {});
  };

  const onDeleteClick = () => {
    dispatch({ type: "DELETE_ROW", index: index - 1 });
    onCloseClick();
  };

  const onSaveClick = async () => {
    setIsLoading(true);
    let promptRes;
    if (!prompt.id) {
      const saveUserPromptPayload = {
        instruction: `Translate to ${targetLang}`,
        prompt_token: promptText.split(" ").length,
        completion_token: completionText.split(" ").length,
        prompt_text: promptText,
        completion_text: completionText,
        document_id: prompt.document_id
      };

      promptRes = await saveUserPrompt(saveUserPromptPayload);
    } else {
      const updatePromptPayload = {
        prompt_id: prompt.id,
        instruction: `Translate to ${targetLang}`,
        prompt_token: promptText.split(" ").length,
        completion_token: completionText.split(" ").length,
        prompt_text: promptText,
        completion_text: completionText,
      };

      promptRes = await updatePrompt(updatePromptPayload);
    }

    if (promptRes.id) {
      dispatch({ type: "UPDATE_ROW", index: index - 1, prompt: promptRes })
      setIsLoading(false);
      toast.success("Success saving row translation");
      return;
    }
    setIsLoading(false);
    toast.error("Fail to save, please try again");
    return;

  }

  useEffect(() => {
    setPromptText(prompt.prompt_text);
    setCompletionText(prompt.completion_text);
  }, [prompt]);

  return (
    <div className="w-full h-2/5 border-t border-gray-500 absolute bottom-0 left-0 px-4 py-2 text-black bg-blue-900 z-5 rounded-t-lg">
      <Button
        type="button"
        wrapperClassName="ml-[98%] p-2"
        buttonClassName="w-full h-full"
        onClick={onCloseClick}
        disabled={isLoading}
      >
        {isLoading ? <FaSpinner className="text-3xl text-white animate-spin" /> :
          <FaTimesCircle className="text-3xl text-white" />}
      </Button>
      <div className="bg-white h-[85%]">
        <div className="flex items-center font-semibold">
          <div className="w-[5%] border border-gray-500 text-center p-2">
            No
          </div>
          <div className="w-[40%] border border-gray-500 p-2 text-center">
            Source Text
          </div>
          <div className="w-[40%] border border-gray-500 p-2 text-center">
            Translate Text{" "}
          </div>
          <div className="w-[15%] border border-gray-500 p-2 text-center">
            Actions
          </div>
        </div>
        <div className="flex items-center h-[86%]">
          <div className="w-[5%] border border-gray-500 h-full text-center">
            {index}
          </div>
          <label
            htmlFor="source_text"
            className="w-[40%] border border-gray-500 h-full"
          >
            <textarea
              name="source_text"
              id="source_text"
              value={promptText}
              className="p-2 w-full h-full resize-none"
              onChange={(e) => setPromptText(e.target.value)}
            />
          </label>
          <label
            htmlFor="translate_text"
            className="w-[40%] border border-gray-500 h-full"
          >
            <textarea
              name="translate_text"
              id="translate_text"
              value={completionText}
              className="p-2 w-full h-full resize-none"
              onChange={(e) => setCompletionText(e.target.value)}
            />
          </label>
          <div className="w-[15%] p-2 border border-gray-500 h-full">
            <Select
              placeholder="Translate Language"
              className="border border-gray-500 mb-2"
              onChange={(option: any) => setTargetLang(option.value)}
              options={DOC_TRANSLATE_LANGUAGES}
            />
            <Button
              type="button"
              wrapperClassName="bg-white text-blue-900 border border-blue-900 rounded p-1 mb-2"
              buttonClassName="w-full h-full flex items-center gap-2 justify-center"
            // onClick={onDeleteClick}
            >
              <FaLanguage className="text-2xl" />
              <span>Translate</span>
            </Button>
            <Button
              type="button"
              wrapperClassName="bg-blue-900 text-white rounded p-1 mb-2"
              buttonClassName="w-full h-full flex items-center gap-2 justify-center"
              onClick={onSaveClick}
            >
              <FaRegSave />
              <span>Save</span>
            </Button>
            <Button
              type="button"
              wrapperClassName="bg-red-500 text-white rounded p-1 mb-2"
              buttonClassName="w-full h-full flex items-center gap-2 justify-center"
              onClick={onDeleteClick}
            >
              <FaTrash />
              <span>Delete</span>
            </Button>
            <Button
              type="button"
              wrapperClassName="bg-white text-black border border-black rounded p-1"
              buttonClassName="w-full h-full flex items-center gap-2 justify-center"
              onClick={() => {
                window.navigator.clipboard.writeText(prompt.completion_text);
                toast.info("Text Copied to Clipboard");
              }}
            >
              <FaCopy />
              <span>Copy</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslateRowEditor;
