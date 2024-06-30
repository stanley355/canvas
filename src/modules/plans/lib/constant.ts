

export const STUDENT_PLAN_FEATURES = [
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
];

export const PLAN_LIST = {
  premium: {
    title: 'Premium',
    desc: "Monthly, Quarterly, or Half Yearly use",
    price: "Rp 25,000",
    priceDesc: "/month, no auto credit",
    ctaText: "Get Started",
    features: [
      {
        label: "AI Translate",
        value: "Unlimited"
      },
      {
        label: "AI Checkbot",
        value: "Unlimited"
      },
      {
        label: "AI Text to Speech",
        value: "Unlimited"
      },
      {
        label: "Subscription Time",
        value: "Monthly, Quarterly, or Half yearly"
      },
      {
        label: "Bonus",
        value: "Five percent discount for Quarterly payment"
      },
    ]
  },
  student: {
    title: 'Student',
    desc: "Apply for Student plan and get unlimited use",
    price: "Rp 0",
    priceDesc: "first year, then 50% off for second year",
    ctaText: "Apply",
    features: [
      {
        label: "AI Translate",
        value: "Unlimited"
      },
      {
        label: "AI Checkbot",
        value: "Unlimited"
      },
      {
        label: "AI Text to Speech",
        value: "Unlimited"
      },
      {
        label: "Subscription Time",
        value: "Until Graduation (*renewable)"
      },
    ]
  },
  free: {
    title: 'Free',
    desc: "Utilize Languageai for your needs",
    price: "Rp 0",
    priceDesc: "/month",
    ctaText: "Automatically Applied",
    features: [
      {
        label: "AI Translate",
        value: "10x/Month"
      },
      {
        label: "AI Checkbot",
        value: "10x/Month"
      },
      {
        label: "AI Text to Speech",
        value: "10x/Month"
      },
    ]
  },
}