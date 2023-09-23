export const PREMIUM_TRANSLATE_SEO = {
  title:
    "Effortless Language Translation with AI: English and All Languages in the World",
  description:
    "Get accurate and reliable translations with our online translation service. Our advanced machine translation technology ensures fast, high-quality results. Whether you need professional document translations or quick language assistance, we have you covered. Experience seamless communication across languages with our top-notch translation services.",
  keywords:
    "translate, translations, translation, translator, machine translation, online translation",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/premium/translate`,
};

export const PREMIUM_CHECKBOT_SEO = {
  title:
    "LanguageAI Checkbot: The AI-powered grammar checker that helps you write better, faster.",
  description:
    "LanguageAI Checkbot is a free online grammar checker that uses AI technology to identify and correct grammar, spelling, and punctuation errors in your text. It also helps you find the best words to use in your writing, and to improve the clarity and structure of your sentences. With Language AI Checkbot, you can be sure that your writing is error-free and clear, every time.",
  keywords:
    "grammar checker, free grammar checker, AI grammar checker, grammar check online, grammar and spelling checker  ",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/premium/checkbot`,
};

import { FaCheck } from "react-icons/fa";

export const LANGUAGE_LIST = [
  {
    label: "None",
    value: "",
  },
  {
    label: "African",
    value: "African",
  },
  {
    label: "Arabic",
    value: "Arabic",
  },
  {
    label: "Bulgarian",
    value: "Bulgarian",
  },
  {
    label: "Chinese (Simplified)",
    value: "Chinese (Simplified)",
  },
  {
    label: "Chinese (Traditional)",
    value: "Chinese (Traditional)",
  },
  {
    label: "Dutch",
    value: "Dutch",
  },
  {
    label: "English",
    value: "English",
  },
  {
    label: "Finnish",
    value: "Finnish",
  },
  {
    label: "French",
    value: "French",
  },
  {
    label: "German",
    value: "German",
  },
  {
    label: "Greek",
    value: "Greek",
  },
  {
    label: "Hebrew",
    value: "Hebrew",
  },
  {
    label: "Hindi",
    value: "Hindi",
  },
  {
    label: "Indonesian",
    value: "Indonesian",
  },
  {
    label: "Italian",
    value: "Italian",
  },
  {
    label: "Japanese",
    value: "Japanese",
  },
  {
    label: "Korean",
    value: "Korean",
  },
  {
    label: "Malay",
    value: "Malay",
  },
  {
    label: "Norwegian",
    value: "Norwegian",
  },
  {
    label: "Persian",
    value: "Persian",
  },
  {
    label: "Polish",
    value: "Polish",
  },
  {
    label: "Portuguese",
    value: "Portuguese",
  },
  {
    label: "Romanian",
    value: "Romanian",
  },
  {
    label: "Russian",
    value: "Russian",
  },
  {
    label: "Serbian",
    value: "Serbian",
  },
  {
    label: "Spanish",
    value: "Spanish",
  },
  {
    label: "Swedish",
    value: "Swedish",
  },
  {
    label: "Tagalog",
    value: "Tagalog",
  },
  {
    label: "Tamil",
    value: "Tamil",
  },
  {
    label: "Thai",
    value: "Thai",
  },
  {
    label: "Turkish",
    value: "Turkish",
  },
  {
    label: "Ukrainian",
    value: "Ukrainian",
  },
  {
    label: "Vietnamese",
    value: "Vietnamese",
  },
  {
    label: "Welsh",
    value: "Welsh",
  },
];

export const TRANSLATE_SEO = {
  title: "LanguageAI Translate: High Quality AI Translation",
  description:
    "LanguageAI Translate: A multilingual translation service that allows you to translate words, phrases, and entire documents between over 100 languages. Accurate and reliable, Language AI Translate is a helpful tool for communication across different languages.",
  keywords:
    "translate, translations, translation, translator, machine translation, online translation",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/translate`,
};

export const TESSERACT_LANGUAGE_LIST = [
  {
    label: "Automatic",
    value: "eng",
  },
  {
    label: "African",
    value: "afr",
  },
  {
    label: "Arabic",
    value: "ara",
  },
  {
    label: "Bulgarian",
    value: "bul",
  },
  {
    label: "Chinese (Simplified)",
    value: "chi_sim",
  },
  {
    label: "Chinese (Traditional)",
    value: "chi_tra",
  },
  {
    label: "English",
    value: "eng",
  },
  {
    label: "Finnish",
    value: "fin",
  },
  {
    label: "France",
    value: "fra",
  },
  {
    label: "German",
    value: "frk",
  },
  {
    label: "Hebrew",
    value: "heb",
  },
  {
    label: "Hindi",
    value: "hin",
  },
  {
    label: "Indonesian",
    value: "ind",
  },
  {
    label: "Italian",
    value: "ita",
  },
  {
    label: "Japanese",
    value: "jpn",
  },
  {
    label: "Korean",
    value: "kor",
  },
  {
    label: "Malay",
    value: "msa",
  },
  {
    label: "Polish",
    value: "pol",
  },
  {
    label: "Portuguese",
    value: "por",
  },
  {
    label: "Romanian",
    value: "ron",
  },
  {
    label: "Russian",
    value: "rus",
  },
  {
    label: "Serbian",
    value: "srp",
  },
  {
    label: "Spanish",
    value: "spa",
  },
  {
    label: "Swedish",
    value: "swe",
  },
  {
    label: "Tagalog",
    value: "tgl",
  },
  {
    label: "Tamil",
    value: "tam",
  },
  {
    label: "Thai",
    value: "tha",
  },
  {
    label: "Turkish",
    value: "tur",
  },
  {
    label: "Ukrainian",
    value: "ukr",
  },
  {
    label: "Vietnamese",
    value: "vie",
  },
];

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
  title:
    "LanguageAI Checkbot: The AI-powered grammar checker that helps you write better, faster.",
  description:
    "LanguageAI Checkbot is a free online grammar checker that uses AI technology to identify and correct grammar, spelling, and punctuation errors in your text. It also helps you find the best words to use in your writing, and to improve the clarity and structure of your sentences. With Language AI Checkbot, you can be sure that your writing is error-free and clear, every time.",
  keywords:
    "grammar checker, free grammar checker, AI grammar checker, grammar check online, grammar and spelling checker  ",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkbot`,
};
