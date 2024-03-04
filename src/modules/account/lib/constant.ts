export interface IAccountSubscriptionDetailPlanConstant {
  planUsage: string;
  planTitle: string;
  planDescription: string;
  planCta: string;
  planHref: string;
  planFeatures:  IAccountSubscriptionDetailPlanFeatureConstant[];
}

export interface IAccountSubscriptionDetailPlanFeatureConstant{
  name: string;
  limit: string;
  isBold: boolean;
}

export const ACCOUNT_SUBSCRIPTION_DETAIL_PLAN: IAccountSubscriptionDetailPlanConstant[] =
  [
    {
      "planUsage": "For Basic Use",
      "planTitle": "Free",
      "planDescription": "Basic writing suggestions and text translate",
      "planCta": "Current Plan",
      "planHref": "/",
      "planFeatures": [
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
      ],
    },
    {
      "planUsage": "For Advance Use",
      "planTitle": "Premium",
      "planDescription":
        "Clarity, vocabulary, tone suggestions, and Advance translation",
      "planCta": "Get Premium",
      "planHref": "/plans/premium",
      "planFeatures": [
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
      ],
    },
    {
      "planUsage": "For Necessary Use",
      "planTitle": "PayAsYouGo",
      "planDescription":
        "Clarity, vocabulary, tone suggestions, and Advance translation",
      "planCta": "Get PayAsYouGo",
      "planHref": "/plans/payasyougo",
      "planFeatures": [
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
      ],
    },
  ];
