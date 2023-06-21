import { FaCheckDouble, FaCross, FaTimes, FaCheck } from "react-icons/fa";

export const LANGUAGE_LIST = [
  {
    label: "None",
    value: "",
  },
  {
    label: "Arabic",
    value: "Arabic",
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
    label: "English",
    value: "English",
  },
  {
    label: "Tagalog",
    value: "Tagalog",
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
    label: "Hindi",
    value: "Hindi",
  },
  {
    label: "Japanese",
    value: "Japanese",
  },
  {
    label: "Javanese",
    value: "Javanese",
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
    label: "Korean",
    value: "Korean",
  },
  {
    label: "Malay",
    value: "Malay",
  },
  {
    label: "Portuguese",
    value: "Portuguese",
  },
  {
    label: "Russian",
    value: "Russian",
  },
  {
    label: "Spanish",
    value: "Spanish",
  },
  {
    label: "Thai",
    value: "Thai",
  },
  {
    label: "Vietnamese",
    value: "Vietnamese",
  },
];

export const TRANSLATE_SEO = {
  title: "Language AI - English and other Language Translator",
  description: "Unlock seamless translation across languages with Language AI's free and fast translation service. Effortlessly translate words, phrases, and web pages between English and over 100 languages. Join millions of individuals and teams benefiting from accurate translations instantly, and experience the power of Language AI today.",
  keywords: "translate, translations, translation, translator, machine translation, online translation",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/translate`
};

export const TRANSLATE_COMPARISON = [
  {
    title: "Translate All Languages",
    original: <FaCheck className="mx-auto" />,
    premium: <FaCheck className="mx-auto" />
  },
  {
    title: "Machine Translation",
    original: <FaCheck className="mx-auto" />,
    premium: <FaCheck className="mx-auto" />
  },
  {
    title: "Accurate Translation",
    original: <FaCheck className="mx-auto" />,
    premium: <FaCheck className="mx-auto" />
  },
  {
    title: "Language Update",
    original: "Quarterly",
    premium: "Weekly"
  },
  {
    title: "Downtime",
    original: "Sometime",
    premium: "Never"
  },
  {
    title: "Quality to Google Translate",
    original: "5x Better",
    premium: "10x Better"
  },
  {
    title: "Words Limit",
    original: "4000 words/token",
    premium: "8000 words/token"
  },
  {
    title: "Cost",
    original: "Always Free",
    premium: "Just Rp1 per words/token"
  },
]