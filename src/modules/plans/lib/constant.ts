export interface IPlanList {
  title: string;
  description: string;
  price: number;
  priceDescription: string;
  ctaText: string;
  ctaLink: string;
  features: IPlanListFeature[];
}

export interface IPlanListFeature {
  name: string;
  limit: string;
  isBold: boolean;
}

export const PLAN_LIST_V2: IPlanList[] = [
  {
    title: "Free",
    description: "Get peace of mind with writing that’s mistake-free.",
    price: 0,
    priceDescription: "per month",
    ctaText: "Automatically Applied",
    ctaLink: "/",
    features: [
      {
        name: "Ai Translate",
        limit: "5x / Month",
        isBold: false,
      },
      {
        name: "Ai Grammar Check",
        limit: "5x / Month",
        isBold: false,
      },
      {
        name: "Ai Image to Text",
        limit: "5x / Month",
        isBold: false,
      },
      {
        name: "Ai Text to Speech",
        limit: "5x / Month",
        isBold: false,
      },
      {
        name: "Grammar Fix",
        limit: "",
        isBold: false,
      },
      {
        name: "Spelling Fix",
        limit: "",
        isBold: false,
      },
      {
        name: "Punctuation Fix",
        limit: "",
        isBold: false,
      },
    ],
  },
  {
    title: "Premium",
    description:
      "Meet your goals and accomplish more with writing that's clear.",
    price: 25000,
    priceDescription: "per month",
    ctaText: "Get Premium",
    ctaLink: "/plans/premium/",
    features: [
      {
        name: "Ai Translate",
        limit: "Unlimited",
        isBold: true,
      },
      {
        name: "Ai Grammar Check",
        limit: "Unlimited",
        isBold: true,
      },
      {
        name: "Ai Image to Text",
        limit: "Unlimited",
        isBold: false,
      },
      {
        name: "Ai Text to Speech",
        limit: "Unlimited",
        isBold: false,
      },
      {
        name: "Grammar Fix",
        limit: "",
        isBold: false,
      },
      {
        name: "Spelling Fix",
        limit: "",
        isBold: false,
      },
      {
        name: "Punctuation Fix",
        limit: "",
        isBold: false,
      },
      {
        name: "Full Sentence Rewrites",
        limit: "",
        isBold: false,
      },
      {
        name: "Word Choice",
        limit: "",
        isBold: false,
      },
      {
        name: "Tone Suggestions",
        limit: "",
        isBold: false,
      },
    ],
  },
  {
    title: "PayAsYouGo",
    description:
      "Move your team’s work forward with consistent, on-brand writing.",
    price: 0.5,
    priceDescription: "per word",
    ctaText: "Get PayAsYouGo",
    ctaLink: "/plans/payasyougo/",
    features: [
      {
        name: "Ai Translate",
        limit: "Credit Limit",
        isBold: true,
      },
      {
        name: "Ai Grammar Check",
        limit: "Credit Limit",
        isBold: true,
      },
      {
        name: "Ai Image to Text",
        limit: "Credit limit",
        isBold: false,
      },
      {
        name: "Ai Text to Speech",
        limit: "Credit limit",
        isBold: false,
      },
      {
        name: "Grammar Fix",
        limit: "",
        isBold: false,
      },
      {
        name: "Spelling Fix",
        limit: "",
        isBold: false,
      },
      {
        name: "Punctuation Fix",
        limit: "",
        isBold: false,
      },
      {
        name: "Full Sentence Rewrites",
        limit: "",
        isBold: false,
      },
      {
        name: "Word Choice",
        limit: "",
        isBold: false,
      },
      {
        name: "Tone Suggestions",
        limit: "",
        isBold: false,
      },
    ],
  },
];
