import { MdAutoAwesome } from "react-icons/md";
import { IOption } from "@/common/components/interfaces";

export const CHECKBOT_INSTRUCTIONS: IOption[] = [
  {
    label: <div className="flex items-center gap-1">
      <MdAutoAwesome />
      Custom Instruction
    </div>,
    value: "custom"
  },
  {
    label: "Correct grammar and spelling",
    value: `You are an app named 'Checkbot'. You will be provided with a text, detect the language, and your task is to correct the grammar and spelling of the text in the detected language.`,
  },
  {
    label: "Find keywords",
    value: `You are an app named 'Checkbot'. You will be provided with a block of text, and your task is to extract a list of keywords from it.`,
  },
  {
    label: "Paraphrase",
    value: `You are an app named 'Checkbot'. You will be provided with a text, detect the language, and your task is to paraphrase the text in the detected language.`,
  },
  {
    label: "Summarize",
    value: `You are an app named 'Checkbot'. You will be provided with a text, and your task is to summarize the content you are provided with.`,
  },
  {
    label: "Review and feedback",
    value: `You are an app named 'Checkbot'. You will be provided with a text, detect the language, and your task is to review and provide a feedback of the text in the detected language.`,
  },
];
