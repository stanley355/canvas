import { SubscriptionsDuration } from "@/common/lib/api/subscriptions/SubscriptionsDuration";

export const PLAN_LIST = {
  premium: {
    title: "Premium",
    desc: "Monthly, Quarterly, or Half Yearly use",
    price: "Rp 25,000",
    priceDesc: "/month, no auto credit",
    ctaText: "Get Started",
    features: [
      {
        label: "AI Translate",
        value: "Unlimited",
      },
      {
        label: "AI Checkbot",
        value: "Unlimited",
      },
      {
        label: "AI Text to Speech",
        value: "Unlimited",
      },
      {
        label: "AI Speech to Text",
        value: "Unlimited",
      },
      {
        label: "Subscription Time",
        value: "Monthly, Quarterly, or Half yearly",
      },
      {
        label: "Bonus",
        value: "Five percent discount for Quarterly payment",
      },
    ],
  },
  student: {
    title: "Student",
    desc: "Apply Student plan and get unlimited use",
    price: "Rp 0",
    priceDesc: "first year, then 50% off for second year",
    ctaText: "Apply",
    features: [
      {
        label: "AI Translate",
        value: "Unlimited",
      },
      {
        label: "AI Checkbot",
        value: "Unlimited",
      },
      {
        label: "AI Text to Speech",
        value: "Unlimited",
      },
      {
        label: "AI Speech to Text",
        value: "Unlimited",
      },
      {
        label: "Subscription Time",
        value: "Renewable on Graduation",
      },
    ],
  },
  free: {
    title: "Free",
    desc: "Utilize Languageai for your needs",
    price: "Rp 0",
    priceDesc: "/month",
    ctaText: "Automatically Applied",
    features: [
      {
        label: "AI Translate",
        value: "10x/Month",
      },
      {
        label: "AI Checkbot",
        value: "10x/Month",
      },
      {
        label: "AI Text to Speech",
        value: "5x/Month",
      },
      {
        label: "AI Speech to Text",
        value: "5x/Month",
      },
    ],
  },
};

export const STUDENT_PLAN_LIST = [
  {
    title: "Half Yearly",
    price: "Rp 70,000",
    durationText: "6 Months",
    duration: SubscriptionsDuration.HalfYearly,
    discountText: "Save 65%",
  },
  {
    title: "Quarterly",
    price: "Rp 30,000",
    durationText: "3 Months",
    duration: SubscriptionsDuration.Quarterly,
    discountText: "Save 70%",
  },
  {
    title: "Monthly",
    price: "Rp 12,500",
    durationText: "1 Month",
    duration: SubscriptionsDuration.Monthly,
    discountText: "Save 50%",
  },
];

export const PREMIUM_PLAN_LIST = [
  {
    title: "Half Yearly",
    price: "Rp 150,000",
    durationText: "6 Months",
    duration: SubscriptionsDuration.HalfYearly,
    discountText: "",
  },
  {
    title: "Quarterly",
    price: "Rp 70,000",
    durationText: "3 Months",
    duration: SubscriptionsDuration.Quarterly,
    discountText: "Save 7%",
  },
  {
    title: "Monthly",
    price: "Rp 25,000",
    durationText: "1 Month",
    duration: SubscriptionsDuration.Monthly,
    discountText: "",
  },
];
