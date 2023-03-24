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
