const currentYear = new Date().getFullYear();

export const SCHOLAR_FILTER_OPTIONS = [
  {
    label: "Any Time",
    query: "",
    value: "",
  },
  {
    label: `Since ${currentYear}`,
    query: "as_ylo",
    value: currentYear,
  },
  {
    label: `Since ${currentYear - 1}`,
    query: "as_ylo",
    value: currentYear - 1,
  },
  {
    label: `Since ${currentYear - 4}`,
    query: "as_ylo",
    value: currentYear - 4,
  },
  {
    label: "Sort by Date",
    query: "scisbd",
    value: 2,
  },
  {
    label: "Sort by Relevance",
    query: "scisbd",
    value: 0,
  },
];
