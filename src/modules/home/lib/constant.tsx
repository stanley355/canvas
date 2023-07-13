import React from "react";
import { FaLanguage, FaRobot, FaPlusCircle } from "react-icons/fa";

export const HOME_SEO = {
  title: "Language AI - Translation and Grammar Check",
  description:
    "Language AI: Free Instant Translation for 100+ Languages | Grammar Check, Spelling & Punctuation | Improve Writing with Language AI",
  keywords:
    "language AI, translate, translation, machine translation, grammar check, free grammar check",
  url: process.env.NEXT_PUBLIC_BASE_URL,
};

export const TRANSLATE_COPYWRITING = [
  {
    icon: <FaLanguage />,
    title: "AI Translate",
    link: "/translate/",
    ctaText: "Translate",
    features: [
      "Translate words, texts, and phrases",
      "Translate English and All Languages",
      "Machine Translation",
      "Online Translation",
      "Contextual and Accurate Translation",
      "Free Translation",
      "4000 words max translation",
    ],
  },
  {
    icon: <FaPlusCircle />,
    title: "AI Translate+",
    link: "/translate/",
    ctaText: "Translate",
    features: [
      "Translate words, texts, and phrases",
      "Translate English and All Languages",
      "Machine Translation",
      "Online Translation",
      "Contextual and Accurate Translation",
      "Rp1 per word/token",
      "8000 words max translation",
    ],
  },
];

export const CHECKBOT_COPYWRITING = [
  {
    icon: <FaRobot />,
    title: "AI Checkbot",
    link: "/checkbot/",
    ctaText: "Let's Check",
    features: [
      "Check Grammar, Spelling, and Punctuation",
      "Improve Writing and Sentence Clarity",
      "Correct English and All Languages",
      "Online Editor",
      "AI powered Grammar Check",
      "Free Grammar Checker",
      "4000 words max",
    ],
  },
  {
    icon: <FaPlusCircle />,
    title: "AI Checkbot+",
    link: "/premium/checkbot/",
    ctaText: "Let's Check",
    features: [
      "Check Grammar, Spelling, and Punctuation",
      "Improve Writing and Sentence Clarity",
      "Correct English and All Languages",
      "Online Editor",
      "AI powered Grammar Check",
      "Rp1 per word/token",
      "8000 words max",
    ],
  },
]