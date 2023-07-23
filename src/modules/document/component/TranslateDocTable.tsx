import React from "react";
import { toast } from "react-toastify";
import { FaCopy, FaPencilAlt, FaPlus, FaTrash } from "react-icons/fa";

import Button from "@/common/components/Button";
import { IPrompt } from "@/pages/document/translate/[id]";

interface ITranslateDocTable {
  prompts: any;
  dispatch: (reducerObj: any) => void;
}

const TranslateDocTable = (props: ITranslateDocTable) => {
  const { prompts, dispatch } = props;

  return (
    <div className="px-4 overflow-y-scroll max-h-[93%]">
      <table className="text-black w-full">
        <thead>
          <tr>
            <th className="w-[5%] border border-gray-500">No</th>
            <th className="w-[40%] border border-gray-500">Source Text</th>
            <th className="w-[40%] border border-gray-500">Translate Text</th>
            <th className="w-[15%] border border-gray-500">-</th>
          </tr>
        </thead>
        <tbody>
          {prompts.map((prompt: IPrompt, index: number) => (
            <tr key={index}>
              <td className="w-[5%] border border-gray-500 text-center">
                {index + 1}
              </td>
              <td className="w-[40%] border border-gray-500 p-2">
                {prompt.prompt_text}
              </td>
              <td className="w-[40%] border border-gray-500 p-2">
                {prompt.completion_text}
              </td>
              <td className="w-auto border border-gray-500 p-2 grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  wrapperClassName="bg-blue-900 text-white rounded p-1 mb-2 w-full"
                  buttonClassName="w-full h-full flex items-center gap-2 justify-center"
                  onClick={() =>
                    dispatch({ type: "EDIT_ROW", index: index, prompt: prompt })
                  }
                >
                  <FaPencilAlt />
                  <span>Edit</span>
                </Button>
                <Button
                  type="button"
                  wrapperClassName="bg-red-500 text-white rounded p-1 mb-2 w-full"
                  buttonClassName="w-full h-full flex items-center gap-2 justify-center"
                  onClick={() => dispatch({ type: "DELETE_ROW", index: index })}
                >
                  <FaTrash />
                  <span>Delete</span>
                </Button>
                <Button
                  type="button"
                  wrapperClassName="bg-white text-black border border-gray-500 rounded p-1"
                  buttonClassName="w-full h-full flex items-center gap-2 justify-center"
                  onClick={() =>
                    dispatch({
                      type: "ADD_ROW",
                      index: index + 1,
                      doc_id: prompt.document_id,
                    })
                  }
                >
                  <FaPlus />
                  <span>Row</span>
                </Button>
                <Button
                  type="button"
                  wrapperClassName="bg-white text-blue-900 border border-blue-900 rounded p-1"
                  buttonClassName="w-full h-full flex items-center gap-2 justify-center"
                  onClick={() => {
                    window.navigator.clipboard.writeText(prompt.completion_text);
                    toast.info("Text Copied to Clipboard");
                  }}
                >
                  <FaCopy />
                  <span>Copy</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

export default TranslateDocTable;
