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
  title: "Improve Your Writing with Language AI Checkbot - Free Grammar Check",
  description:
    "Enhance Your Writing with Language AI  Grammar Checker | Fix Grammar, Spelling, and Punctuation Errors Instantly.",
  keywords:
    "Improve your writing with the best AI grammar checker and free online grammar check tool. Fix grammar, spelling, punctuation errors, and enhance your text effortlessly. Elevate your writing skills and ensure flawless content with our powerful AI-driven grammar checker. Try it now for free!",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkbot`,
};
