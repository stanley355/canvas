const currentYear = new Date().getFullYear();

export const SERP_SCHOLAR_FILTER_OPTIONS = [
  {
    label: "Any Time",
    value: [],
  },
  {
    label: `Since ${currentYear - 1}`,
    value: ["as_ylo", String(currentYear - 1)],
  },
  {
    label: `Since ${currentYear - 2}`,
    value: ["as_ylo", String(currentYear - 2)],
  },
  {
    label: `Since ${currentYear - 4}`,
    value: ["as_ylo", String(currentYear - 4)],
  },
  {
    label: "Sort By Relevance",
    value: ["scisbd", "0"],
  },
  {
    label: "Sort By Date",
    value: ["scisbd", "2"],
  },
];

export const SEMANTIC_SCHOLAR_FILTER_OPTIONS = [
  {
    label: "Any Time",
    value: [],
  },
  {
    label: `Since ${currentYear - 1}`,
    value: ["year", `${currentYear - 1}-`],
  },
  {
    label: `Since ${currentYear - 2}`,
    value: ["year", `${currentYear - 2}-`],
  },
  {
    label: `Since ${currentYear - 4}`,
    value: ["year", `${currentYear - 4}-`],
  },
  {
    label: "PDF Only",
    value: ["openAccessPDF", "true"],
  },
  {
    label: "Review Only",
    value: ["publicationTypes", "Review"],
  },
  {
    label: "Journal Article Only",
    value: ["publicationTypes", "JournalArticle"],
  },
  {
    label: "Case Report Only",
    value: ["publicationTypes", "CaseReport"],
  },
  {
    label: "Book Only",
    value: ["publicationTypes", "Book"],
  },
];
