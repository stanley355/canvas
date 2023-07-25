import React from "react";
import {
  FaLanguage,
  FaRobot,
  FaPlusCircle,
  FaFile,
  FaDochub,
} from "react-icons/fa";

export const HOME_SEO = {
  title: "Language AI: Translate, Translation, and Grammar Check | Free Grammar Check",
  description:
    "Unlock the power of Language AI for flawless translations, grammar checks, and punctuation assistance. Our free grammar check tool ensures error-free content while our machine translation feature helps you break language barriers. Enhance your writing with accurate translations and impeccable grammar - all in one place. Try it now!",
  keywords:
    "Language AI, translate, translation, machine translation, grammar check, free grammar check",
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
  {
    icon: <FaDochub />,
    title: "Doc Translate",
    link: "/document/",
    ctaText: "Translate Docs",
    features: [
      "Translate words, texts, and phrases",
      "Translate English and All Languages",
      "Machine Translation",
      "Online Translation",
      "Contextual and Accurate Translation",
      "Free Translation",
      "Unlimited words translation",
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
];
