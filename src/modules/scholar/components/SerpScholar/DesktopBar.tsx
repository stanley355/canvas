import React from "react";
import { FaGraduationCap, FaChevronUp, FaChevronDown } from "react-icons/fa";
import Select from "react-select";
import Button from "@/common/components/Button";

interface ISerpScholarDesktopBar {
  showTable: boolean;
  resultLength: number;
  onFilterChange: (filter:any) => void;
  onToggleClick: () => void;
}

const SerpScholarDesktopBar = (props: ISerpScholarDesktopBar) => {
  const { showTable, resultLength, onToggleClick, onFilterChange } = props;

  const currentYear = new Date().getFullYear();

  const FILTER_OPTIONS = [
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

  return (
    <div className="flex flex-row items-center justify-between p-2 border rounded-sm w-full">
      <span className="flex flex-row items-center text-xl">
        <FaGraduationCap className="text-2xl" />
        <span className="mx-2">Google Scholar</span>
        <span>({resultLength} Results)</span>
      </span>
      <div className="flex flex-row items-center w-1/5">
        <Select
          options={FILTER_OPTIONS}
          name="filter_options"
          placeholder="Filter"
          className="mr-4 text-black w-full"
          onChange={onFilterChange}
        />
        <Button
          type="button"
          onClick={onToggleClick}
          buttonClassName="bg-white p-2 rounded-md items-center text-black flex flex-row"
        >
          <span className="font-semibold mr-2">
            {showTable ? "Hide" : "Show"}
          </span>
          {showTable ? <FaChevronUp /> : <FaChevronDown />}
        </Button>
      </div>
    </div>
  );
};

export default SerpScholarDesktopBar;
