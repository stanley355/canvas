import { FaCheck } from "react-icons/fa";

export const CHECKBOT_OPTIONS = [
  {
    label: "Custom instruction",
    value: "personal_instruction",
  },
  {
    label: "Analyse Strength and Weakness",
    value: "Analyze the strength and weakness from this text:",
  },
  {
    label: "Correct Grammar",
    value: "Correct the grammar of this text:",
  },
  {
    label: "Correct Spelling",
    value: "Correct the spelling of this text:",
  },
  {
    label: "Correct Grammar & Spelling",
    value: "Correct the grammar and spelling of this text:",
  },
  {
    label: "Find conclusion",
    value: "Find the conclusion of this text:",
  },
  {
    label: "Find keyword",
    value: "Find the keywords of this text:",
  },
  {
    label: "Improvement Suggestion",
    value: "Give improvement suggestions of this text:",
  },
  {
    label: "Paraphrase",
    value: "Paraphrase this text:",
  },
  {
    label: "Proofread",
    value: "Proofread this text:",
  },
  {
    label: "Simplify this text",
    value: "Simplify this text:",
  },
  {
    label: "Summarize this text",
    value: "Summarize this text:",
  },
  {
    label: "Rewrite this text",
    value: "Rewrite this text:",
  },
  {
    label: "Review this text",
    value: "Review this text:",
  },
];

export const CHECKBOT_SEO = {
  title: "LanguageAI Checkbot: The AI-powered grammar checker that helps you write better, faster.",
  description:
    "LanguageAI Checkbot is a free online grammar checker that uses AI technology to identify and correct grammar, spelling, and punctuation errors in your text. It also helps you find the best words to use in your writing, and to improve the clarity and structure of your sentences. With Language AI Checkbot, you can be sure that your writing is error-free and clear, every time.",
  keywords: "grammar checker, free grammar checker, AI grammar checker, grammar check online, grammar and spelling checker  ",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkbot`,
};
