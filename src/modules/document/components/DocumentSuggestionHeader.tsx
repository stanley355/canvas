import ReactSelect, { SingleValue } from "react-select";
import { toast } from "react-toastify";

import DocumentTitle from "./DocumentTitle";
import { fetchUpdateDocument } from "@/common/lib/api/documents/fetchUpdateDocument";
import { useDocumentEditor } from "../lib/useDocumentEditor";
import { IDocument } from "@/common/lib/api/documents/documentInterface";
import { IUser } from "@/common/lib/api/users/userInterfaces";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

interface IDocumentSuggestionHeader {
  user: IUser;
  document: IDocument;
}

const DocumentSuggestionHeader = (props: IDocumentSuggestionHeader) => {
  const { user, document } = props;
  const { documentEditorStates, dispatch } = useDocumentEditor();
  const { editorText } = documentEditorStates;

  const options = [
    {
      label: "Analyze Text Strength and Weakness",
      value: "Analyze the strength and weakness of this text",
    },
    {
      label: "Correct grammar and spelling",
      value: "Correct the grammar and spelling of this text",
    },
    {
      label: "Give Improvement Suggestion",
      value: "Give improvement suggestions of this text",
    },
    {
      label: "Paraphrase Text",
      value: "Summarize this text",
    },
    {
      label: "Rewrite Text",
      value: "Rewrite this text",
    },
  ];

  const handleInstructionChange = async (
    option: SingleValue<{ label: string; value: string }>
  ) => {
    dispatch({
      type: "SET",
      name: "isLoading",
      value: true,
    });
    // const apiRes: IChatCompletionRes = await fetchAIChatCompletionV2(
    //   String(option?.value),
    //   documentEditorStates.editorText
    // );
    // if (apiRes.id) {
    //   sendFirebaseEvent("document_instruct");
    //   dispatch({
    //     type: "SET",
    //     name: "suggestionText",
    //     value: apiRes.choices[0].message.content,
    //   });
    //   dispatch({
    //     type: "SET",
    //     name: "isLoading",
    //     value: false,
    //   });

    //   const updatePayload = {
    //     id: document.id,
    //     user_id: user.id,
    //     name: document.name,
    //     content: editorText,
    //     checkbot_completion: apiRes.choices[0].message.content,
    //   };

    //   await fetchUpdateDocument(updatePayload);
    //   return;
    // }

    dispatch({
      type: "SET",
      name: "isLoading",
      value: false,
    });
    toast.error("Gagal melaksanakan instruksi, silakan coba lagi");
    return;
  };

  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <DocumentTitle user={user} document={document} />
      <ReactSelect
        options={options}
        placeholder="Pilih Instruksi"
        className="w-1/2 border border-blue-900 rounded-md"
        onChange={handleInstructionChange}
      />
    </div>
  );
};

export default DocumentSuggestionHeader;
