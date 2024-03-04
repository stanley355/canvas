export const PLAN_LIST = [
  {
    title: "Document",
    desc: "Check your Document Grammar and Spelling for free",
    price: "FREE",
    unit: "",
    url: "/documents/",
  },
  {
    title: "Pay-as-you-Go",
    desc: "Bayar hanya untuk penggunaan Anda, tanpa masa berlaku",
    price: "Rp1",
    unit: "per kata",
    url: "/plans/topup/",
  },
  {
    title: "Monthly",
    desc: "Solusi jangka pendek terbaik",
    price: "Rp25,000",
    unit: "per bulan",
    url: "/plans/subscription?duration=Monthly",
  },
  {
    title: "Quarterly",
    desc: "Untuk terjemahan dan penulisan berkualitas",
    price: "Rp70,000",
    unit: "per 3 bulan",
    url: "/plans/subscription?duration=Quarterly",
  },
  {
    title: "Half yearly",
    desc: "Solusi jangka panjang Anda",
    price: "Rp150,000",
    unit: "per 6 bulan",
    url: "/plans/subscription?duration=HalfYearly",
  },
];

export const DOKU_VA_LIST = [
  {
    label: "BCA via DOKU",
    value: "/doku-virtual-account/v2/payment-code",
  },
  {
    label: "BSI (Bank Syariah Indonesia)",
    value: "/bsm-virtual-account/v2/payment-code",
  },
  {
    label: "Bank Mandiri",
    value: "/mandiri-virtual-account/v2/payment-code",
  },

  {
    label: "Bank BRI",
    value: "/bri-virtual-account/v2/payment-code",
  },
  {
    label: "Bank BNI",
    value: "/bni-virtual-account/v2/payment-code",
  },
  {
    label: "Bank CIMB",
    value: "/cimb-virtual-account/v2/payment-code",
  },
  {
    label: "ATM Bersama",
    value: "/doku-virtual-account/v2/payment-code",
  },
];

export interface IPlanList {
  title:            string;
  description:      string;
  price:            number;
  priceDescription: string;
  ctaText:          string;
  ctaLink:          string;
  features:         IPlanListFeature[];
}

export interface IPlanListFeature {
  name:   string;
  limit: string;
  isBold: boolean;
}

export const PLAN_LIST_V2: IPlanList[] = [
  {
    title: "Free",
    description: "Get peace of mind with writing that’s mistake-free.",
    price: 0,
    priceDescription: "per month",
    ctaText: "Current Plan",
    ctaLink: "/",
    features: [
      {
        "name": "Ai Translate",
        "limit": "Unlimited",
        isBold: false,
      },
      {
        "name": "Ai Checkbot",
        "limit": "10x / Month",
        isBold: false,
      },
      {
        "name": "Grammar Fix",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Spelling Fix",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Punctuation Fix",
        "limit": "",
        isBold: false,
      },
    ]
  },
  {
    title: "Premium",
    description: "Meet your goals and accomplish more with writing that's clear.",
    price: 25000,
    priceDescription: "per month",
    ctaText: "Get Premium",
    ctaLink: "/plans/premium/",
    features: [
      {
        "name": "Ai Translate",
        "limit": "Unlimited",
        isBold: true,
      },
      {
        "name": "Ai Checkbot",
        "limit": "Unlimited",
        isBold: true,
      },
      {
        "name": "Grammar Fix",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Spelling Fix",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Punctuation Fix",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Full Sentence Rewrites",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Word Choice",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Tone Suggestions",
        "limit": "",
        isBold: false,
      },
    ]
  },
  {
    title: "PayAsYouGo",
    description: "Move your team’s work forward with consistent, on-brand writing.",
    price: 1,
    priceDescription: "per word",
    ctaText: "Get PayAsYouGo",
    ctaLink: "/plans/payasyougo/",
    features: [
      {
        "name": "Ai Translate",
        "limit": "Unlimited",
        isBold: true,
      },
      {
        "name": "Ai Checkbot",
        "limit": "Credit Limit",
        isBold: true,
      },
      {
        "name": "Grammar Fix",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Spelling Fix",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Punctuation Fix",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Full Sentence Rewrites",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Word Choice",
        "limit": "",
        isBold: false,
      },
      {
        "name": "Tone Suggestions",
        "limit": "",
        isBold: false,
      },
    ]
  },
]