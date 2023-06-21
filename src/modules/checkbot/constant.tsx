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
  title: "Language AI Checkbot - Free Grammar Check",
  description:
    "Enhance Your Writing with Language AI  Grammar Checker | Fix Grammar, Spelling, and Punctuation Errors Instantly.",
  keywords:
    "check grammar, spelling, punctuation, improve text, AI grammar checker, free grammar check, fix grammar, free online grammar check, improve writing, English checker tool, online grammar fixer",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkbot`,
};

export const CHECKBOT_COMPARISON = [
  {
    title: "All Language Check",
    original: <FaCheck className="mx-auto" />,
    premium: <FaCheck className="mx-auto" />
  },
  {
    title: "Grammar & Spelling Check",
    original: <FaCheck className="mx-auto" />,
    premium: <FaCheck className="mx-auto" />
  },
  {
    title: "Writing Improvement",
    original: <FaCheck className="mx-auto" />,
    premium: <FaCheck className="mx-auto" />
  },
  {
    title: "AI Powered Check",
    original: <FaCheck className="mx-auto" />,
    premium: <FaCheck className="mx-auto" />
  },
  {
    title: "Downtime",
    original: "Sometime",
    premium: "Never"
  },
  {
    title: "Quality to Grammarly",
    original: "10x Better",
    premium: "20x Better"
  },
  {
    title: "Words Limit",
    original: "4000 words",
    premium: "8000 words"
  },
  {
    title: "Cost",
    original: "Always Free",
    premium: "Just Rp1 per words"
  },
]